var firstButton = document.querySelector('#vol_100_ml');
var secondButton = document.querySelector('#vol_150_ml');
var thirdButton = document.querySelector('#vol_250_ml');
var resetButton = document.querySelector('.reset a');

var water = document.querySelector('.water');
var waterDrunk = 0;

function reset() {
    waterDrunk = 0;
    save();
    render();
}

function save() {
    localStorage.setItem('waterDrunk', waterDrunk);
}

function load() {
    waterDrunk = parseInt(localStorage.getItem('waterDrunk'))
        || 0;
}

resetButton.addEventListener('click', function (e) {
    reset();
});

firstButton.addEventListener('click', function (e) {
    waterDrunk += 100;
    save();
    render();
});

secondButton.addEventListener('click', function (e) {
    waterDrunk += 150;
    save();
    render();
});

thirdButton.addEventListener('click', function (e) {
    waterDrunk += 250;
    save();
    render();
});

function render() {
    water.innerText = waterDrunk + 'ml';

    if (waterDrunk < 500) {
        water.setAttribute('class', 'water count water-0');
    } else if (waterDrunk < 1000) {
        water.setAttribute('class', 'water count water-25');
    } else if (waterDrunk < 1500) {
        water.setAttribute('class', 'water count water-50');
    } else if (waterDrunk < 2000) {
        water.setAttribute('class', 'water count water-75');
    } else {
        water.setAttribute('class', 'water count water-100');
    }
}

load();
render();
