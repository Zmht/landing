// sidebar.js
window.addEventListener('DOMContentLoaded', (event) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.innerHTML = `
            <a href="/Website/index.html">Home</a>
            <a href="/articles.html">Articles</a>
            <a href="/favorites.html">Favorites</a>
            <a href="/pictures.html">Pictures</a>
            <a href="/misc.html">Miscellaneous</a>
            <a href="/about.html">About</a>
            <a href="/coffee_corner.html>Coffee Corner</a>
        `;
    }
});