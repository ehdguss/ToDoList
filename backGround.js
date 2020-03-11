const body = document.querySelector("body");
const IMG_NUM = 4;

function paintBackGround(num) {
    const image = new Image();
    image.src = `images/${num + 1}.jpg`;
    image.classList.add('bgImg')
    body.prepend(image);
}

function genRandom() {
    const num = Math.floor(Math.random() * IMG_NUM);
    return num;
}

function init() {
    const num = genRandom();
    paintBackGround(num);
}
init();