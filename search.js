// Hamburger

function toggleNav() {
    const nav = document.getElementById('search-input');
    const bars = document.querySelectorAll('.bar');

    search-input.classList.toggle('change');
    bars.forEach(bar => bar.classList.toggle('change'));
}