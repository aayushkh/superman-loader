function timeout (ms) {
    return new Promise(res => setTimeout(res,ms));
}

async function vibrate (elem, delay) {
    if (delay != 0) {
        await timeout(delay);    
    }
    document.querySelector('.superhero').classList.add("vibrate");
}

async function unvibrate (elem, delay) {
    if (delay != 0) {
        await timeout(delay);    
    }
    document.querySelector('.superhero').classList.remove("vibrate");
}

async function fadeOutElement (elem, delay) {
    if (delay != 0) {
        await timeout(delay);
    }
    document.querySelector(elem).classList.add("fadeOut");
}

async function deleteElement (elem, delay) {
    if (delay != 0) {
        await timeout(delay);
    }
    document.querySelector(elem).style.display = "none";
}

async function animateHero () {
    fadeOutElement(".lines", 0);
    document.querySelector(".superhero").classList.add("hoverHero");
}

async function loadMainPage (elem, delay) {

}

async function removeLoader () {
    await timeout(19500);
    unvibrate(".superhero", 0);
    animateHero();
    // fadeOutElement(".loader", 0);
    // deleteElement(".loader", 2000);
}

window.onload = function() {
    console.log("started");
    vibrate('.superhero', 9000).then(() => console.log("virate started"));
    removeLoader().then(() => console.log("removeLoader done"));
    loadMainPage().then(() => console.log("loading main page"));
}