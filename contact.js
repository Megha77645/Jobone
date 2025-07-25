// Contact form submit handler
document.addEventListener('DOMContentLoaded', function() {
    // Navbar/footer includes (update as needed for your includes system)
    // Example: fetch('navbar.html').then(r => r.text()).then(html => document.getElementById('navbar-placeholder').innerHTML = html);
    // Example: fetch('footer.html').then(r => r.text()).then(html => document.getElementById('footer-placeholder').innerHTML = html);

    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulate sending (replace with AJAX/fetch to your backend as needed)
        formMessage.style.color = '#1dd1a1';
        formMessage.textContent = "Sending...";
        setTimeout(function() {
            formMessage.textContent = "Thank you! Your message has been sent.";
            form.reset();
        }, 1300);
    });
});