/* =========================================================
   JavaScript DOM Activity — Navbar Dropdown Menu
   Vanilla JavaScript only (no libraries, no frameworks)
   Author: Merjohn Pagente
   =========================================================
   What this file does:
   1. Finds every .nav-dropdown in the page (desktop + mobile).
   2. Toggles its menu open/closed when the button is clicked.
   3. Closes it on outside click, on Escape, and on link click.
   4. Keeps ARIA attributes in sync for accessibility.
   5. Supports keyboard navigation (Arrow keys, Home, End, Tab).
   ========================================================= */

(function () {
    'use strict';

    // --- DOM selection -------------------------------------------------
    var dropdowns = document.querySelectorAll('.nav-dropdown');
    if (!dropdowns.length) return;

    var openDropdown = null; // tracks the currently open one

    // --- Helpers -------------------------------------------------------

    function getParts(dropdown) {
        return {
            root: dropdown,
            button: dropdown.querySelector('.nav-dropdown__toggle'),
            menu: dropdown.querySelector('.nav-dropdown__menu'),
            items: dropdown.querySelectorAll('.nav-dropdown__menu a')
        };
    }

    function openMenu(dropdown) {
        if (openDropdown && openDropdown !== dropdown) {
            closeMenu(openDropdown);
        }
        var p = getParts(dropdown);
        dropdown.classList.add('is-open');
        p.button.setAttribute('aria-expanded', 'true');
        openDropdown = dropdown;
    }

    function closeMenu(dropdown) {
        var p = getParts(dropdown);
        dropdown.classList.remove('is-open');
        p.button.setAttribute('aria-expanded', 'false');
        if (openDropdown === dropdown) openDropdown = null;
    }

    function toggleMenu(dropdown) {
        if (dropdown.classList.contains('is-open')) {
            closeMenu(dropdown);
        } else {
            openMenu(dropdown);
        }
    }

    function focusItem(items, index) {
        if (!items.length) return;
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        items[index].focus();
    }

    // --- Wire up each dropdown ----------------------------------------

    Array.prototype.forEach.call(dropdowns, function (dropdown) {
        var p = getParts(dropdown);
        if (!p.button || !p.menu) return;

        // Click on the toggle button
        p.button.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            toggleMenu(dropdown);
        });

        // Keyboard on the toggle button
        p.button.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openMenu(dropdown);
                focusItem(p.items, 0);
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                openMenu(dropdown);
                focusItem(p.items, p.items.length - 1);
            } else if (event.key === 'Escape') {
                closeMenu(dropdown);
            }
        });

        // Keyboard inside the menu
        p.menu.addEventListener('keydown', function (event) {
            var list = Array.prototype.slice.call(p.items);
            var current = list.indexOf(document.activeElement);

            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    focusItem(p.items, current + 1);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    focusItem(p.items, current - 1);
                    break;
                case 'Home':
                    event.preventDefault();
                    focusItem(p.items, 0);
                    break;
                case 'End':
                    event.preventDefault();
                    focusItem(p.items, p.items.length - 1);
                    break;
                case 'Escape':
                    event.preventDefault();
                    closeMenu(dropdown);
                    p.button.focus();
                    break;
                case 'Tab':
                    closeMenu(dropdown);
                    break;
            }
        });

        // Clicking a menu link closes the dropdown (and the mobile menu)
        Array.prototype.forEach.call(p.items, function (link) {
            link.addEventListener('click', function () {
                closeMenu(dropdown);
                var burger = document.getElementById('menuToggle');
                if (burger) burger.checked = false;
            });
        });
    });

    // --- Global listeners ----------------------------------------------

    // Click anywhere outside an open dropdown closes it
    document.addEventListener('click', function (event) {
        if (openDropdown && !openDropdown.contains(event.target)) {
            closeMenu(openDropdown);
        }
    });

    // Escape anywhere closes the open dropdown
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && openDropdown) {
            var btn = openDropdown.querySelector('.nav-dropdown__toggle');
            closeMenu(openDropdown);
            if (btn) btn.focus();
        }
    });

    // Close on resize so the desktop and mobile menus never get stuck open
    window.addEventListener('resize', function () {
        if (openDropdown) closeMenu(openDropdown);
    });
})();