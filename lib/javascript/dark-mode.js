 const darkModeToggle = document.getElementById('dark-mode');

        document.addEventListener('DOMContentLoaded', () => {
            const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
            if (darkModeEnabled) {
                document.body.classList.add('dark-mode');
                darkModeToggle.checked = true;
            }
        });

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
