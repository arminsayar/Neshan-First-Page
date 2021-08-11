'use strict'

const fixedDiv = document.getElementById('footer-up-sec');

let body = document.getElementById('body-m');

// 2484

function scrollF() {
    let y = window.scrollY;
    if (y >= 2483) {
        fixedDiv.style = "position: static; margin-top:-60px;";
    } else {
        fixedDiv.style = "position: fixed;";
    }
};
