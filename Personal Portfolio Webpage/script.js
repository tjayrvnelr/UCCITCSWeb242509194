const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = themeToggle.querySelector('i');
const body = document.body;

function updateIcon(isDark) {
    if (isDark) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateIcon(true);
} else {
    updateIcon(false);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    updateIcon(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const text = "Tjay Rhiven Eleria";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("type-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}

window.onload = typeWriter;
