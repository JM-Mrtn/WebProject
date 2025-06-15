document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    // Check for a saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light-mode') {
        body.classList.add('light-mode');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
        }
    } else {
        body.classList.add('dark-mode');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');

                if (moonIcon && sunIcon) {
                    moonIcon.style.display = 'inline';
                    sunIcon.style.display = 'none';
                }
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');

                if (moonIcon && sunIcon) {
                    moonIcon.style.display = 'none';
                    sunIcon.style.display = 'inline';
                }
            }
        });
    }

    // Responsive Nav Toggle Logic
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Form Submit Button Alert
    const sendMessageButton = document.getElementById('sendMessageBtn');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Not yet available');
        });
    }
});
