
//* START V7 = V6 + form vanishing after sending

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const alertBox = document.getElementById('alert');

    // Function to show the alert
    function showAlert(message, type) {
        alertBox.textContent = message;
        alertBox.className = 'alert'; // Reset classes
        if (type === 'error') {
            alertBox.classList.add('error');
        } else if (type === 'success') {
            alertBox.classList.add('success');
        }
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Simple email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Form submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Validation
        if (!name && !email && !message) {
            showAlert('Veuillez remplir tous les champs.', 'error');
            return;
        }

        if (!name) {
            showAlert('Veuillez saisir votre nom.', 'error');
            return;
        }

        if (!email) {
            showAlert('Veuillez saisir une adresse email.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Veuillez saisir une adresse email valide (extension type .com par exemple).', 'error');
            return;
        }

        if (!message) {
            showAlert('Veuillez saisir un message.', 'error');
            return;
        }

        // If all validations pass, show success message
        showAlert('Votre message a été envoyé avec succès!', 'success');

        // Here the code to send the form data to the server

        // Reset the form after a delay to ensure success message is visible
        setTimeout(() => {
            form.reset();
            form.classList.remove('visible'); // Remove the visible class
            form.classList.add('disappear'); // Add the disappear class
            
            // Remove the disappear class after the transition ends to reset the form
            setTimeout(() => {
                form.classList.remove('disappear');
            }, 3500); // Duration should match the CSS transition duration
        }, 100); // Delay should ideally match the duration of the success message display
    });

    // Scroll event listener to add the animation effect
    window.addEventListener('scroll', function() {
        const formTop = form.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (formTop < windowHeight) {
            form.classList.add('visible');
        }
    });
});



//* END V7 = V6 + form vanishing after sending