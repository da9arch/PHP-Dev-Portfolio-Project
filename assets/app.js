
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
document.addEventListener('DOMContentLoaded', function () {
    // Проверяем значение в localStorage и устанавливаем тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Обработчик события для иконки Light Theme
    const lightThemeIcon = document.getElementById('light-theme-icon');
    lightThemeIcon.addEventListener('click', function () {
        setTheme('light');
        toggleAnimation(lightThemeIcon);
    });

    // Обработчик события для иконки Dark Theme
    const darkThemeIcon = document.getElementById('dark-theme-icon');
    darkThemeIcon.addEventListener('click', function () {
        setTheme('dark');
        toggleAnimation(darkThemeIcon);
    });

    // Прикрепляем навигационную панель при прокрутке
    const navbar = document.querySelector('nav');
    const navbarOffsetTop = navbar.offsetTop;

    function updateNavbarPosition() {
        if (window.scrollY >= navbarOffsetTop) {
            navbar.classList.add('fixed', 'top-0', 'w-full');
        } else {
            navbar.classList.remove('fixed', 'top-0', 'w-full');
        }
    }

    window.addEventListener('scroll', updateNavbarPosition);

    // Функция для установки темы
    function setTheme(theme) {
        if (theme === 'light') {
            document.body.style.backgroundColor = '#a5a5a5';
        } else if (theme === 'dark') {
            document.body.style.backgroundColor = '#0D0D0D';
        }

        // Сохраняем текущую тему в localStorage
        localStorage.setItem('theme', theme);
    }

    // Функция для переключения анимации
    function toggleAnimation(icon) {
        icon.classList.add('theme-icon-active');
        setTimeout(() => {
            icon.classList.remove('theme-icon-active');
        }, 500); // Время анимации (в миллисекундах)
    }
});