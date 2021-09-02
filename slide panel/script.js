const panel1 = document.getElementById("panel1");
const panelText = document.getElementById("panelText");

var myTxt = "Their early work was a little too new wave for my tastes, but when Sports came out in '83, I think they really came into their own, commercially and artistically. The whole album has a clear, crisp sound, and a new sheen of consummate professionalism that really gives the songs a big boost. He's been compared to Elvis Costello, but I think Huey has a far more bitter, cynical sense of humor.";
var i = 0;

function typewriter() {
    if (i <= myTxt.length) {
        panelText.innerHTML += myTxt.charAt(i);
        i++;
        setTimeout(typewriter, 40);
    }
}

panel1.addEventListener("click", panel1.classList.remove("panelDown"));
panel1.addEventListener("click", typewriter);