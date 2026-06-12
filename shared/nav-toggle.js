// Shared navigation toggle script (M4)
// Replaces inline onclick handlers with accessible JS
(function() {
    function setMenuState(menu, button, isOpen) {
        menu.classList.toggle('open', isOpen);
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    document.addEventListener('DOMContentLoaded', function() {
        var toggles = document.querySelectorAll('.nav-toggle');
        toggles.forEach(function(button) {
            var menuId = button.getAttribute('aria-controls') || 'nav-menu';
            var menu = document.getElementById(menuId);
            if (!menu) return;

            button.addEventListener('click', function(event) {
                event.stopPropagation();
                setMenuState(menu, button, !menu.classList.contains('open'));
            });

            menu.addEventListener('click', function(event) {
                if (event.target && event.target.closest('a')) {
                    setMenuState(menu, button, false);
                }
            });

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && menu.classList.contains('open')) {
                    setMenuState(menu, button, false);
                    button.focus();
                }
            });

            document.addEventListener('click', function(event) {
                if (!menu.classList.contains('open')) return;
                if (menu.contains(event.target) || button.contains(event.target)) return;
                setMenuState(menu, button, false);
            });
        });
    });
})();
