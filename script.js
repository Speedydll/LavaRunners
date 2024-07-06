function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Initially show the home page
document.addEventListener("DOMContentLoaded", function() {
    showPage('home');
});
