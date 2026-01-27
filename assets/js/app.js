document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const iconSun = themeBtn.querySelector('.icon-sun');
    const iconMoon = themeBtn.querySelector('.icon-moon');

    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = savedTheme || (systemDark ? 'dark' : 'light');
    applyTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        } else {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        }
    }
}
