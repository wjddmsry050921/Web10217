let visualIdx = 0;
document.querySelector("#visualLfMv").addEventListener('click', () => {
    if (visualIdx == 0) return;
    visualIdx++;
    renderSlide();
})

document.querySelector("#visualRgMv").addEventListener("click", () => {
    if (visualIdx == -2) return;
    visualIdx--;
    renderSlide();
});

function renderSlide() {
    document.querySelector("#visual-list").style.left = `${visualIdx * 100}%`;
}

setInterval(() => {
    if (visualIdx == -2) {
        visualIdx = 0;
        renderSlide();
    } else {
        visualIdx--;
        renderSlide();
    }
}, 7000)

let mountainTitle = document.querySelector('#visual-info > p:nth-of-type(1)');
let mountainHeight = document.querySelector('#visual-info > p:nth-of-type(2)');
let mountainNumber = document.querySelector('#visual-info > p:nth-of-type(3)');
setInterval(() => {
    if (visualIdx == 0) {
        mountainTitle.innerText = 'EVEREST';
        mountainHeight.innerText = '8,849m';
        mountainNumber.innerText = '1st';
    } else if (visualIdx == -1) {
        mountainTitle.innerText = 'K2';
        mountainHeight.innerText = '8,611m';
        mountainNumber.innerText = '2nd';
    } else if (visualIdx == -2) {
        mountainTitle.innerText = 'Kilimanjaro';
        mountainHeight.innerText = '5,895m';
        mountainNumber.innerText = '17th';
    }
}, 100)

let mountainsTitle = document.querySelector('#mountains-title > h2');
let mountainsInfo = document.querySelector('#mountains-title > p');

document.querySelector('.choice-content:nth-of-type(1)').addEventListener('click', () => {
    document.querySelector('#map-list').style.left = '-100%';
    mountainsTitle.innerText = 'ANDES MOUNTAINS';
    mountainsInfo.innerText = 'The range is 7,000 km (4,350 mi) long';
});
document.querySelector('.choice-content:nth-of-type(2)').addEventListener('click', () => {
    document.querySelector('#map-list').style.left = '-200%';
    mountainsTitle.innerText = 'HIMALAYAS MOUNTAINS';
    mountainsInfo.innerText = 'The range is 2,400 km (1,500 mi) long';
});
document.querySelector('.choice-content:nth-of-type(3)').addEventListener('click', () => {
    document.querySelector('#map-list').style.left = '-300%';
    mountainsTitle.innerText = 'ROCKY MOUNTAINS';
    mountainsInfo.innerText = 'The range is 4,800km (3,000 mi) long';
});

let mtVideo = document.querySelector('#mountains-video');

setInterval(() => {
    if (mtVideo.paused) {
        document.querySelector('.map-content:nth-of-type(1) > span:nth-of-type(1)').style.opacity = '1'
    } else {
        document.querySelector('.map-content:nth-of-type(1) > span:nth-of-type(1)').style.opacity = '0'
    }
}, 100)
mtVideo.addEventListener('click', () => {
    if (mtVideo.paused) {
        mtVideo.play();
    } else {
        mtVideo.pause();
    }
})

let famouseMountainTitle = document.querySelector('#famous-left-container > h2');

function everestMoutain() {
    famouseMountainTitle.innerHTML = 'EVEREST<br>MOUNTAIN';
}
function fujiMoutain() {
    famouseMountainTitle.innerHTML = 'FUJI<br>MOUNTAIN';
}
function k2Moutain() {
    famouseMountainTitle.innerHTML = 'K2<br>MOUNTAIN';
}
function kilomanjaroMoutain() {
    famouseMountainTitle.innerHTML = 'KILOMANJARO<br>MOUNTAIN';
}

let a = 0, b = 0, c = 0;
setInterval(() => {
    let scrollY = document.querySelector('html').scrollTop;
    let bodyHeight = document.querySelector('body').clientHeight;
    let scrollValue = scrollY / bodyHeight;

    a = bodyHeight * 0.3;
    b = bodyHeight * 0.53;
    c = bodyHeight * 1;
    console.log(scrollValue);
    if (scrollValue >= 0.03) {
        document.querySelector('#mountains-title').className = 'mountainsTitleFadeIn';
        document.querySelector('#choice-mountains').className = 'mountainschoiceFadeIn';
        document.querySelector('#mountains-video').className = 'mountainsvideoFadeIn';
    }

}, 100);

document.querySelector('#menu-window > ul > li:nth-of-type(2)').addEventListener('click', () => {
    window.scrollTo(0, Math.round(a));
});
document.querySelector('#menu-window > ul > li:nth-of-type(3)').addEventListener('click', () => {
    window.scrollTo(0, Math.round(b));
});
document.querySelector('#menu-window > ul > li:nth-of-type(4)').addEventListener('click', () => {
    window.scrollTo(0, Math.round(c));
});
