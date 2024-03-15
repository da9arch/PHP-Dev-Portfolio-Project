export function setTheme(theme) {
    if (theme === 'light') {
        document.body.style.background = 'linear-gradient(to right, #a5a5a5, #ffffff)';
        document.body.style.color = '#000000'; // Черный текст для светлой темы
    } else if (theme === 'dark') {
        document.body.style.background = 'linear-gradient(to right, #0D0D0D, #1a1a1a)';
        document.body.style.color = '#ffffff'; // Белый текст для темной темы
    }

    // Сохраняем текущую тему в localStorage
    localStorage.setItem('theme', theme);
}

export function toggleAnimation(icon) {
    icon.classList.add('theme-icon-active');
    setTimeout(() => {
        icon.classList.remove('theme-icon-active');
    }, 500); // Время анимации (в миллисекундах)
}