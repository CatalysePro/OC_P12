
// servicesModals.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all modals
    var modals = document.querySelectorAll('.services_modal');

    // Get all "En savoir plus" links
    var links = document.querySelectorAll('.card .back a');

    // Attach event listeners to each link
    links.forEach(function(link, index) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var modal = document.getElementById('services-modal' + (index + 1));
            if (modal) {
                modal.style.display = "block";
            }
        });
    });


    // Attach event listeners to close buttons
    var closeButtons = document.querySelectorAll('.services_modal .modal_services_close');
    closeButtons.forEach(function(close) {
        close.addEventListener('click', function() {
            var modal = this.closest('.services_modal');
            modal.style.display = "none";
        });
    });

    // Close modal if clicked outside of content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('services_modal')) {
            event.target.style.display = "none";
        }
    });

    // Close modal when clicking on the "Nous contacter" link
    var contactLinks = document.querySelectorAll('.services-modal-content a');
    contactLinks.forEach(function(contactLink) {
        contactLink.addEventListener('click', function() {
            var modal = this.closest('.services_modal');
            modal.style.display = "none";
        });
    });
});

