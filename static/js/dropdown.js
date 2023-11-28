//  TOGGLER FUNCTION FOR DROPDOWN MENUS
const toggleDropDownMenu = (dropdownToggler) => {

    // console.log(dropdownToggler);
        //toggle between open and close states for menu
        const dropdownMenu = dropdownToggler.nextElementSibling;
        dropdownMenu.classList.toggle("hidden");
        dropdownMenu.classList.toggle("flex");

        // check if menu is open
        if (dropdownMenu.classList.contains("flex")) {
            //set aria-expanded to true
            dropdownToggler.ariaExpanded = "true";
            //get the dropdown menu item and focus on it
            const firstDropdownMenuItem = dropdownMenu.querySelector("[role='menuitem']");
            firstDropdownMenuItem.focus();
        } else {
            //set aria-expanded to false
            dropdownToggler.ariaExpanded = "false";
            dropdownToggler.focus();
        }

        //confirm if the aria-expanded attribute has changed based on the menu open status
        // const isDropdownMenuExpanded = dropdownToggler.attributes["aria-expanded"];
        // console.log(isDropdownMenuExpanded);
}

const handleMenuNavigation = (event, dropdownMenuItem) => {

    const dropdownMenu      = dropdownMenuItem.parentElement.parentElement;
    const dropdownMenuItems = dropdownMenu.querySelectorAll(".dropdown-menu-item[role='menuitem']");
    const menuItemIndex     = Array.prototype.indexOf.call(dropdownMenuItems);
    const isLastItem        = menuItemIndex === dropdownMenuItems.length - 1;
    const isFirstItem       = menuItemIndex === 0;
    const previousIndex     = isFirstItem ? dropdownMenuItems.length - 1 : menuItemIndex - 1;
    const nextIndex         = isLastItem ? 0 : menuItemIndex + 1;

    console.log(menuItemIndex);

    switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
            event.preventDefault();
            dropdownMenuItems.item(nextIndex).focus();
            break;
        case "ArrowUp":
        case "ArrowLeft":
            event.preventDefault();
            dropdownMenuItems.item(previousIndex).focus();
            break;
        case "Escape":
            dropdownMenu.previousElementSibling.click();
            break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //get all dropdown menu togglers
    const dropdownTogglers  = document.querySelectorAll(".dropdown-toggler");
    const dropdownMenuItems = document.querySelectorAll(".dropdown-menu-item[role='menuitem']");

    //check if there's any dropdownmenu in the dom before executing logic
    if (dropdownTogglers.length > 0) {
        //Loop through dropdown menu togglers and listen for a click event
        dropdownTogglers.forEach(dropdownToggler => {
            dropdownToggler.addEventListener("click", () => {
                toggleDropDownMenu(dropdownToggler);
            });
        });
    }

    //check if dropdown menu items are present in the dom
    if (dropdownMenuItems.length > 0) {
        //loop through menu togglers and listen for keyup event
        dropdownMenuItems.forEach((dropdownMenuItem) => {
            dropdownMenuItem.addEventListener("keyup", (e) => { 
                handleMenuNavigation(e, dropdownMenuItem) 
            });
        });
    }

});