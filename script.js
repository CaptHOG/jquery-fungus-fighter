$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

let fungusHP = 100;

let userAP = 100;
   
let attacks = [
    arcaneSeptre = {
    'AP cost': 12,
    'HP Damage': 14
},
    entangle = {
    'AP cost': 23,
    'HP Damage': 9
},
    dragonBlade = {
    'AP cost': 38,
    'HP Damage': 47
},
    starFire = {
    'AP cost': 33,
    'HP Damage': 25
}];

function onReady() {
    $('.arcane-sceptre').on('click', useArcaneSeptre);
    //$('.attack-btn').on('click', reduceAttackPoints);

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function renderNewPoints() {
    $('.ap-text').empty();
    $('.ap-text').append(`<div class="ap-text"> ${userAP} AP</div>`);
}

function useArcaneSeptre() {
    console.log('using useArcaneSeptre');
    if (userAP <= 12) {
        console.log('no more power');
    }
    userAP -= 12;
    $('.ap-text').text(userAP);
    renderNewPoints();
}




/*
// subtract from HP
function loseHitPoints() {
    console.log('HP lost');
    let arcaneSeptre = $('.arcane-sceptre');
    fungusHP -= 14;
    $('.arcane-sceptre').text(fungusHP);
}

// subtract from AP
function reduceAttackPoints() {
    console.log('AP lost');
}
*/