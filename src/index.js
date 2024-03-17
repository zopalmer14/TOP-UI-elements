
function setupDropDownMenu() {
    // DOM references
    const drop_down_container = document.querySelector('.drop-down-container');
    const drop_down_title = document.querySelector('.drop-down-title');
    const drop_down_menu = document.querySelector('.drop-down-menu');

    // toggle the visibility of the drop-down menu when the title is clicked
    drop_down_title.addEventListener('click', () => {
        drop_down_menu.classList.toggle('reveal');
    });

    // if the user clicks outside the drop-down menu, hide it
    window.addEventListener("click", (e) => {
        if (!drop_down_container.contains(e.target)) {
            drop_down_menu.classList.remove("reveal");
        }
    });
}

function initializePage() {
    // setup the drop-down menu
    setupDropDownMenu();
}

// run / debug
initializePage();