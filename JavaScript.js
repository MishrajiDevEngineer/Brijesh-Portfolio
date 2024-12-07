// Select all elements that have the toggle-menu class
const toggleMenus = document.querySelectorAll('.toggle-menu');

toggleMenus.forEach(menu => {
    menu.addEventListener('click', function () {
        // Close all other open menus except the one clicked
        toggleMenus.forEach(m => {
            if (m !== this) m.classList.remove('active');
        });

        // Toggle the active class for this menu
        this.classList.toggle('active');
    });
});
