(() => {
    function setup_navbar() {
        const btn = document.getElementById('navbar-mobile-menu-toggle-button');
        
        const btnBurger = document.getElementById('navbar-mobile-menu-toggle-burger');
        const btnEks = document.getElementById('navbar-mobile-menu-toggle-x');
        
        const menu = document.getElementById('navbar-mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('block');

            btnBurger.classList.toggle('hidden');
            btnBurger.classList.toggle('block');

            btnEks.classList.toggle('hidden');
            btnEks.classList.toggle('block');
        });

    
    }

    function setup() {
        setup_navbar();
    }
    
    window.onload = setup
})();
