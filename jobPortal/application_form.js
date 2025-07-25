
let currentPage = 0;

const pages = document.querySelectorAll('.form-page');

const dots = document.querySelectorAll('.dot');



function showPage(pageIndex) {

    // Hide all pages

    pages.forEach(page => page.classList.remove('active'));

    dots.forEach(dot => dot.classList.remove('active'));

    

    // Show current page

    pages[pageIndex].classList.add('active');

    dots[pageIndex].classList.add('active');

}



function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    }

}



function prevPage() {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }

}



function goToPage(pageIndex) {

    currentPage = pageIndex;

    showPage(currentPage);

}



function submitForm() {

    alert('Form submitted successfully!');

    // Here you would normally collect all form data and send it to a server

}



// Initialize first page

showPage(0);