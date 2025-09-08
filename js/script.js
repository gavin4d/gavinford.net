

window.onload = function () {

    document.querySelector("header").innerHTML =
    '    <div class="header-inner">'+
    '      <nav class="is-collapsed">'+
    '        <a href="/" id="logo-video">'+
    '          <video width=48, height=48 autoplay muted>'+
    '            <source src="/img/logo128.mp4" type="video/mp4" />'+
    '          </video>'+
    '        </a>'+
    '        <a href="/">Home</a>'+
    '        <p> / </p>'+
    '        <a href="/about">About</a>'+
    '        <p> / </p>'+
    '        <a href="/projects">Projects</a>'+
    '        <p> / </p>'+
    '        <a href="/blog">Blog</a>'+
    '        <p> / </p>'+
    '        <a href="/#contact" onclick="document.getElementById("contact").children[0].classList.add("is-in")">Contact</a>'+
    '      </nav>'+
    '      <div class="show-nav">'+
    '        <svg viewBox="0 0 128 128">'+
    '          <path d="M 16,32 L 114,32 M 16,64 L 114,64 M 16,96 L 114,96" />'+
    '        </svg>'+
    '      </div>'+
    '    </div>';

    const nav = document.querySelector("nav");
    const showNav = document.querySelector(".show-nav");

    if (window.location.hash) {
        console.log(document.getElementById(window.location.hash.substring(1)).children[0].classList.add("is-in"));
    }

    var isNavCollapsed = true;
    showNav.addEventListener('click', (event) => {
        isNavCollapsed = !isNavCollapsed;
        if (isNavCollapsed) {
            nav.classList.add("is-collapsed");
        } else {
            nav.classList.remove("is-collapsed");
        }
    });

};

// window.onbeforeunload = function () {
//     window.scrollTo(0,0);
// };