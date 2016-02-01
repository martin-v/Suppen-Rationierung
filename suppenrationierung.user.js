// ==UserScript==
// @name        Suppen Rationierung
// @namespace   SuppenRationierung
// @description Protects you from excessive procrastination on soup.io.

// @include     *.soup.io/
// @include     http://www.soup.io/everyone

// @author      Martin Vietz < suppenrationierung <at> martin . vietz . eu >
// @license     https://opensource.org/licenses/MIT The MIT License

// ==/UserScript==

// configuration
closeSpeed = 0.5
freeMinutes = 3

// program

boxHeight = 0;

blackBox = document.createElement("div");
blackBox.style.backgroundColor = "black";
blackBox.style.color = "gray";
blackBox.style.position = "fixed";
blackBox.style.zIndex = "100000";
blackBox.style.bottom = "0px";
blackBox.style.width = "100%";
blackBox.style.textAlign = "center";
blackBox.style.height = boxHeight + "px";
blackBox.appendChild(document.createTextNode("time over"));
document.getElementsByTagName("body")[0].appendChild(blackBox);


window.setTimeout(function () {
    window.addEventListener("scroll", function (e) {
            boxHeight= boxHeight + closeSpeed;
            blackBox.style.height = boxHeight + "px";
            blackBox.style.paddingTop = boxHeight / 2 + "px";
        }, false);
}, freeMinutes * 60 * 1000);

//EOF
