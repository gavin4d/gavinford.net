window.onload = function () {
    const nav = document.querySelector(".side-nav");
    const showNav = document.querySelector(".show-nav");

    var isNavCollapsed = true;
    showNav.addEventListener('click', (event) => {
        isNavCollapsed = !isNavCollapsed;
        if (isNavCollapsed) {
            nav.classList.add("collapsed");
        } else {
            nav.classList.remove("collapsed");
        }
    });

};