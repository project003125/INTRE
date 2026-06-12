// Shared navigation toggle script (M4)
// Replaces inline onclick handlers with accessible JS
(function() {
    function setMenuState(menu, button, isOpen) {
        menu.classList.toggle('open', isOpen);
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }

    function getMenuItems(menu) {
        return Array.from(menu.querySelectorAll('[role="menuitem"]'));
    }

    function trapFocus(event, menu) {
        if (event.key !== 'Tab') return;
        var items = getMenuItems(menu);
        if (items.length === 0) return;

        var first = items[0];
        var last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var toggles = document.querySelectorAll('.nav-toggle');
        toggles.forEach(function(button) {
            var menuId = button.getAttribute('aria-controls') || 'nav-menu';
            var menu = document.getElementById(menuId);
            if (!menu) return;

            // Set menu role
            menu.setAttribute('role', 'menu');

            // Set menuitem role on each link
            var links = menu.querySelectorAll('a');
            links.forEach(function(link) {
                link.setAttribute('role', 'menuitem');
            });

            // Initialize aria-hidden based on current state
            menu.setAttribute('aria-hidden', menu.classList.contains('open') ? 'false' : 'true');

            button.addEventListener('click', function(event) {
                event.stopPropagation();
                var opening = !menu.classList.contains('open');
                setMenuState(menu, button, opening);
                if (opening) {
                    var items = getMenuItems(menu);
                    if (items.length > 0) items[0].focus();
                }
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
                if (menu.classList.contains('open')) {
                    trapFocus(event, menu);
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
