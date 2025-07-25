const toggleBg = document.getElementById('toggleBg');
const toggleSlider = document.getElementById('toggleSlider');
const customerOption = document.getElementById('customerOption');
const clientOption = document.getElementById('clientOption');
const customerForm = document.getElementById('customerForm');
const clientForm = document.getElementById('clientForm');

// Toggle between customer and client forms
toggleBg.addEventListener('click', function() {
    if (customerOption.classList.contains('active')) {
        // Switch to client
        customerOption.classList.remove('active');
        clientOption.classList.add('active');
        toggleSlider.style.transform = 'translateX(100%)';
        customerForm.classList.remove('active');
        clientForm.classList.add('active');
    } else {
        // Switch to customer
        customerOption.classList.add('active');
        clientOption.classList.remove('active');
        toggleSlider.style.transform = 'translateX(0)';
        customerForm.classList.add('active');
        clientForm.classList.remove('active');
    }
});