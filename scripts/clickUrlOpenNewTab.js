
// clickUrlOpenNewTab.js linked to index v20 style.css v18

document.addEventListener('DOMContentLoaded', () => {
    const visitWebsiteBtn = document.getElementById('visit-website');

    visitWebsiteBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du bouton
        const activeThumbnail = document.querySelector('.thumbnail.active');
        if (activeThumbnail) {
            const url = activeThumbnail.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank'); // Ouvre l'URL dans un nouvel onglet
            } else {
                console.error('Aucune URL trouvée pour l\'élément actif.');
            }
        } else {
            console.error('Aucune miniature active sélectionnée.');
        }
    });
});

