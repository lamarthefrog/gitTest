const button = document.getElementById("button");
const panel = document.getElementById("panel");

// there is a better way to do this and actually keep the panel offscreen, but this was a test
function FadePanel() {
    if (panel.classList.contains("fadeIn")) {
        panel.classList.remove("fadeIn");
        panel.classList.add("fadeOut");
    } else {
        panel.classList.remove("fadeOut");
        panel.classList.add("fadeIn");
    }
}

panel.addEventListener("click", FadePanel);