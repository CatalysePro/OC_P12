

//? START V12 = V11 + modify words' style in attribute data-description

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainPhoto = document.getElementById('main-photo');
    const photoTitle = document.getElementById('photo-title');

    const photoDescription = document.getElementById('photo-description');

    const apiUsageCheckbox = document.getElementById('api-usage');
    const photoLegend = document.getElementById('photo-legend');
    const pieChartCanvas = document.getElementById('pie-chart');
    const visitWebsite = document.getElementById('visit-website');
    const thumbnailsWrapper = document.querySelector('.thumbnails-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const expandDescription = document.getElementById('expand-description');
    const fullDescriptionModal = document.getElementById('full-description-modal');
    const fullDescription = document.getElementById('full-description');
    const closeButton = document.querySelector('.close-button_description');
    let pieChart;
    let currentThumbnailIndex = 0;
    
    

    // Update function main photo & associated infos
    function updateMainPhoto(thumbnail) {
        mainPhoto.src = thumbnail.getAttribute('data-photo');
        photoTitle.textContent = thumbnail.getAttribute('data-title');

        //* Retrieve & formate the description
        let description = thumbnail.getAttribute('data-description');

        //* Replace some words by a tagged HTML (bold and/or italic and/or color)
        description = description.replace("Objectif :", "<strong style='color: #989a9c;'><em>Objectif :</em></strong>");
        description = description.replace("Actions & résultats :", "<strong style='color: #989a9c;'><em>Actions & résultats :</em></strong>");

        //* Process the description into paragraphs
        const paragraphs = description.split('|').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');

        //* Inject the formatted description in the corresponding containers
        photoDescription.innerHTML = paragraphs;
        fullDescription.innerHTML = paragraphs;

    
        //todo here after continuation of the code.

        photoLegend.textContent = thumbnail.getAttribute('data-legend');
        visitWebsite.href = thumbnail.getAttribute('data-url');
        const chartData = thumbnail.getAttribute('data-chart').split(',').map(Number);
        updatePieChart(chartData);
        checkDescriptionOverflow();
        updateActiveThumbnail(thumbnail); // Synchronize selected thumbnail style

        // Update checkbox of API use
        const apiUsage = thumbnail.getAttribute('data-api') === 'true';
        apiUsageCheckbox.checked = apiUsage;

        // Manage tools styles
        const toolsContainer = document.querySelector('.tools_container');
        const toolImages = toolsContainer.querySelectorAll('.logo_it_tools');

        // Reinitialize styles
        toolImages.forEach(tool => tool.classList.remove('highlight'));

        //Retrieve index of linked tools
        const toolsIndices = thumbnail.getAttribute('data-tools').split(',').map(Number);
        toolsIndices.forEach(index => {
            if (toolImages[index]) {
                toolImages[index].classList.add('highlight'); // Add highlight class
            }
        });


    }

    function updatePieChart(data) {
        if (pieChart) {
            pieChart.destroy();
        }
        const labels = ["HTML5", "CSS3 / SCSS", "JavaScript", "Autre"].slice(0, data.length);
        pieChart = new Chart(pieChartCanvas, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'].slice(0, data.length),
                }]
            },
            options: {
                responsive: true,
                aspectRatio: 1,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth: 20,
                            fontSize: 14,
                            generateLabels: function(chart) {
                                return chart.data.labels.map((label, i) => {
                                    const dataset = chart.data.datasets[0];
                                    return {
                                        text: `${label}: ${dataset.data[i]}%`,
                                        fillStyle: dataset.backgroundColor[i],
                                    };
                                });
                            }
                        }
                    }
                }
            }
        });
    }

    

        // Function for circular thumbnails
    function scrollThumbnails(direction) {
        if (direction === 'left') {
            currentThumbnailIndex = (currentThumbnailIndex - 1 + thumbnails.length) % thumbnails.length;
            
        } else {
            currentThumbnailIndex = (currentThumbnailIndex + 1) % thumbnails.length;
           
        }
        const selectedThumbnail = thumbnails[currentThumbnailIndex];
        

        if (window.innerWidth < 600) {
            // Pour les petits écrans, ajustez le défilement sans inclure la marge gauche
            thumbnailsWrapper.scrollLeft = selectedThumbnail.offsetLeft - thumbnailsWrapper.offsetLeft;
            // Supprimez la marge gauche de la miniature sélectionnée si elle est présente
            selectedThumbnail.style.marginLeft = '0';
        } else {
            // Pour les grands écrans, calculez le défilement avec la marge gauche incluse
            thumbnailsWrapper.scrollLeft = selectedThumbnail.offsetLeft - thumbnailsWrapper.offsetLeft - parseInt(window.getComputedStyle(selectedThumbnail).marginLeft);
        }
        
        // manage thumbnail style when scrolling
        thumbnails.forEach(t => t.classList.remove('active'));
        selectedThumbnail.classList.add('active');
        
        
        updateMainPhoto(selectedThumbnail);
        updateActiveThumbnail(selectedThumbnail);
         
        
    }

    // manage style of active Thumbnail
    function updateActiveThumbnail(activeThumbnail) {
        thumbnails.forEach(t => t.classList.remove('active'));
        activeThumbnail.classList.add('active');
    }

    // Click on thumbnail function 
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            currentThumbnailIndex = index;
            
            updateMainPhoto(thumbnail);
            
        });
    });


    // manage description overflow
    function checkDescriptionOverflow() {
        if (photoDescription.scrollHeight > photoDescription.clientHeight) {
            expandDescription.style.display = 'block';
        } else {
            expandDescription.style.display = 'none';
        }
    }

    // Open Modal window
    function openModal() {
        fullDescriptionModal.style.display = 'block';
        document.addEventListener('click', closeModalOnClickOutside);
    }

    // Close Modal window
    function closeModal() {
        fullDescriptionModal.style.display = 'none';
        document.removeEventListener('click', closeModalOnClickOutside);
    }

    // Outside click closes Modal window
    function closeModalOnClickOutside(event) {
        if (!fullDescriptionModal.contains(event.target) && !expandDescription.contains(event.target)) {
            closeModal();
        }
    }

    
    leftArrow.addEventListener('click', () => scrollThumbnails('left'));
    rightArrow.addEventListener('click', () => scrollThumbnails('right'));

    expandDescription.addEventListener('click', (event) => {
        event.stopPropagation();
        openModal();
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === fullDescriptionModal) {
            fullDescriptionModal.style.display = 'none';
        }
    });

    // Initialize with 1st photo
    updateMainPhoto(thumbnails[0]);
    updateActiveThumbnail(thumbnails[0]);
    
});

//? START V12 = V11 + modify words' style in attribute data-description