function toggleMenu() {
            document.body.classList.toggle('menu-active');
        }

        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            toggleMenu();
        }
