let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

let container = document.querySelector('.container');
let item = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = item.length - 1;

let list = container.querySelector('.list');

// Próximo → incrementa
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1);
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = (active + 1) > lastPosition ? 0 : active + 1;

    setSlider();
    item[active].classList.add('active');
};

// Anterior → decrementa
prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1);
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = (active - 1) < firstPosition ? lastPosition : active - 1;

    setSlider();
    item[active].classList.add('active');
};

function setSlider() {
    // Atualiza os indicadores
    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}
