// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle active class on dropdown button when clicked
    document.querySelector('.dropdown-button').addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
