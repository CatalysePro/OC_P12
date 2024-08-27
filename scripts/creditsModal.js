
// JavaScript pour les modales
document.addEventListener('DOMContentLoaded', function() {
    // Get all modals
    var modals = document.querySelectorAll('.credits_modal');

    // Get all "En savoir plus" links
    var links = document.querySelectorAll('.link_credits_modal');

    // Attach event listeners to each link
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var modal = document.getElementById('credits-modal');
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    // Attach event listeners to close buttons
    var closeButtons = document.querySelectorAll('.credits_modal .modal_credits_close');
    closeButtons.forEach(function(close) {
        close.addEventListener('click', function() {
            var modal = this.closest('.credits_modal');
            modal.style.display = "none";
        });
    });

    // Close modal if clicked outside of content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('credits_modal')) {
            event.target.style.display = "none";
        }
    });

    // Close modal when clicking on the "Nous contacter" link
    var contactLinks = document.querySelectorAll('.credits-modal-content a');
    contactLinks.forEach(function(contactLink) {
        contactLink.addEventListener('click', function() {
            var modal = this.closest('.credits_modal');
            modal.style.display = "none";
        });
    });
});

