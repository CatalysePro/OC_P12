import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

// Fonction récursive pour parcourir les répertoires
async function processDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);
        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                await optimizeImage(filePath);
            } else if (stat.isDirectory()) {
                await processDirectory(filePath);
            }
        }
    } catch (err) {
        console.error('Error processing directory:', err);
    }
}

// Fonction pour optimiser une image spécifique
async function optimizeImage(filePath) {
    try {
        const extname = path.extname(filePath).toLowerCase();
        if (['.jpg', '.jpeg'].includes(extname)) {
            await imagemin([filePath], {
                destination: path.dirname(filePath),
                plugins: [imageminMozjpeg({ quality: 75 })]
            });
        } else if (extname === '.png') {
            await imagemin([filePath], {
                destination: path.dirname(filePath),
                plugins: [imageminPngquant({ quality: [0.6, 0.8] })]
            });
        } else if (extname === '.gif') {
            await imagemin([filePath], {
                destination: path.dirname(filePath),
                plugins: [imageminGifsicle({ optimizationLevel: 2 })]
            });
        } else if (extname === '.svg') {
            await imagemin([filePath], {
                destination: path.dirname(filePath),
                plugins: [
                    imageminSvgo({
                        plugins: [
                            { removeViewBox: false },
                            { cleanupIDs: false }
                        ]
                    })
                ]
            });
        } else if (extname === '.webp') {
            await imagemin([filePath], {
                destination: path.dirname(filePath),
                plugins: [imageminWebp({ quality: 75 })]
            });
        }
        console.log(`Image optimized: ${filePath}`);
    } catch (err) {
        console.error(`Error optimizing image ${filePath}:`, err);
    }
}

// Point d'entrée principal
async function main() {
    const startDirectory = path.join(process.cwd(), 'images'); // Chemin vers le répertoire d'images
    await processDirectory(startDirectory);
}

// Exécuter le script principal
main().then(() => {
    console.log('Optimization process completed successfully.');
}).catch(err => {
    console.error('Optimization process encountered an error:', err);
});
