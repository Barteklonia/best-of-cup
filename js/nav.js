/**
 * Best of Cup - Mobile Navigation (Hamburger Menu)
 * Automatically initializes mobile drawer on small screens.
 */
(function() {
    function initMobileNav() {
        const header = document.querySelector('header');
        const nav = document.querySelector('header nav');
        if (!header || !nav) return;

        // Prevent double initialization
        if (header.querySelector('.burger-menu-btn')) return;

        // Create Burger Button
        const btn = document.createElement('button');
        btn.className = 'burger-menu-btn';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Menü öffnen');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = `
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
        `;
        header.appendChild(btn);

        // Create backdrop overlay
        let overlay = document.querySelector('.nav-backdrop');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'nav-backdrop';
            document.body.appendChild(overlay);
        }

        function toggleNav(forceState) {
            const isOpen = typeof forceState === 'boolean' ? forceState : !header.classList.contains('nav-open');
            if (isOpen) {
                header.classList.add('nav-open');
                btn.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
                btn.setAttribute('aria-label', 'Menü schließen');
                overlay.classList.add('active');
                document.body.classList.add('nav-locked');
            } else {
                header.classList.remove('nav-open');
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
                btn.setAttribute('aria-label', 'Menü öffnen');
                overlay.classList.remove('active');
                document.body.classList.remove('nav-locked');
            }
        }

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleNav();
        });

        overlay.addEventListener('click', function() {
            toggleNav(false);
        });

        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                toggleNav(false);
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && header.classList.contains('nav-open')) {
                toggleNav(false);
            }
        });

        // Close on window resize past mobile breakpoint
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && header.classList.contains('nav-open')) {
                toggleNav(false);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();
