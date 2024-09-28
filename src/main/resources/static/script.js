let veganLineXl = document.querySelector('.about-container-xl > div:first-child > div:nth-child(3) > div:nth-child(2)');
let veganIconXl = document.querySelector('.about-vegan-container-xl > img:first-child');
let veganIconRectTopXl = veganIconXl.getBoundingClientRect().top;
let veganImageXl = document.querySelector('.about-container-xl > div:first-child > div:nth-child(3) > div:first-child > div:nth-child(2) > div:first-child > img:first-child');
let veganBottomRectangleXl = document.querySelector('.about-vegan-container-xl > div:nth-child(2) > div:nth-child(2) > div:first-child');
let veganBottomRectangleRectTopXl = veganBottomRectangleXl.getBoundingClientRect().top;
let veganFirstGraphXl = document.querySelector('.about-vegan-container-xl > div:nth-child(3) > img:first-child');
let veganSecondGraphXl = document.querySelector('.about-vegan-container-xl > div:nth-child(3) > div:nth-child(2) > div:first-child');
let veganThirdGraphXl = document.querySelector('.about-vegan-container-xl > div:nth-child(3) > div:nth-child(2) > img:nth-child(2)');
let veganLineSwitchXl = true;

let gmoLineXl = document.querySelector('.about-container-xl > div:first-child > div:nth-child(4) > div:first-child');
let gmoIconXl = document.querySelector('.about-gmo-container-xl > img:first-child');
let gmoIconRectTopXl = gmoIconXl.getBoundingClientRect().top;
let gmoImageXl = document.querySelector('.about-container-xl > div:first-child > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > img:first-child');
let gmoAlteredCrossOutXl = document.querySelector('.about-gmo-container-xl > div:nth-child(4) > div:nth-child(3)');
let gmoEngineeredCrossOutXl = document.querySelector('.about-gmo-container-xl > div:nth-child(5) > div:nth-child(3)');
let gmoModifiedCrossOutXl = document.querySelector('.about-gmo-container-xl > div:nth-child(6) > div:nth-child(3)');
let gmoLineSwitchXl = true;

let glutenLineXl = document.querySelector('.about-container-xl > div:first-child > div:nth-child(5) > div:nth-child(2)');
let glutenIconXl = document.querySelector('.about-gluten-container-xl > img:first-child');
let glutenIconRectTopXl = glutenIconXl.getBoundingClientRect().top;
let glutenImageXl = document.querySelector('.about-container-xl > div:first-child > div:nth-child(5) > div:first-child > div:nth-child(2) > div:first-child > img:first-child');
let glutenFirstCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:first-child > div:first-child > span:nth-child(2)');
let glutenSecondCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:first-child > div:nth-child(3) > span:nth-child(2)');
let glutenThirdCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:first-child >  div:nth-child(5) > span:nth-child(2)');
let glutenFourthCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:nth-child(2) > div:first-child > span:nth-child(2)');
let glutenFifthCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)');
let glutenSixthCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:nth-child(2) > div:nth-child(5) > span:nth-child(2)');
let glutenSeventhCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:nth-child(3) > div:first-child > span:nth-child(2)');
let glutenEighthCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:nth-child(3) > div:nth-child(3) > span:nth-child(2)');
let glutenNinthCityXl = document.querySelector('.about-gluten-container-xl > div:nth-child(2) > div:first-child > div:nth-child(3) > div:nth-child(5) > span:nth-child(2)');
let glutenLineSwitchXl = true;

setTimeout(() => {
    alert('This website is currently under construction and is only visually presentable in desktop view. I included it to showcase a more e-commerce type of layout and allow real-time update observations.');
}, 1000);

window.addEventListener('scroll', () => {
    veganIconRectTopXl = veganIconXl.getBoundingClientRect().top;
    veganBottomRectangleRectTopXl = veganBottomRectangleXl.getBoundingClientRect().top;
    gmoIconRectTopXl = gmoIconXl.getBoundingClientRect().top;
    glutenIconRectTopXl = glutenIconXl.getBoundingClientRect().top;
    if (window.innerHeight > veganIconRectTopXl && veganLineSwitchXl === true) {
        veganLineXl.style.transition = 'height 1s';
        veganImageXl.style.transition = 'opacity 3s';
        veganLineXl.style.height = '300px';
        veganImageXl.style.opacity = '1';
        veganLineSwitchXl = false;
    };
    if (window.innerHeight > veganBottomRectangleRectTopXl) {
        veganLineXl.style.transition = 'height 1s';
        veganFirstGraphXl.style.transition = 'opacity 1s, transform 1s';
        veganSecondGraphXl.style.transition = 'opacity 1s, transform 1s';
        veganThirdGraphXl.style.transition = 'opacity 1s, transform 1s';
        veganLineXl.style.height = '921.5px';
        veganFirstGraphXl.style.opacity = '1';
        veganFirstGraphXl.style.transform = 'translateX(0)';
        setTimeout(() => {
            veganSecondGraphXl.style.opacity = '1';
            veganSecondGraphXl.style.transform = 'translateX(0)';
        }, 200);
        setTimeout(() => {
            veganThirdGraphXl.style.opacity = '1';
            veganThirdGraphXl.style.transform = 'translateX(0)';
        }, 500);
    };
    if (window.innerHeight > gmoIconRectTopXl && gmoLineSwitchXl === true) {
        gmoLineXl.style.transition = 'height 1s';
        gmoImageXl.style.transition = 'opacity 3s';
        gmoLineXl.style.height = '300px';
        gmoImageXl.style.opacity = '1';
        gmoLineSwitchXl = false;
    };
    if (window.innerHeight > gmoIconRectTopXl + 400) {
        gmoLineXl.style.transition = 'height 1s';
        gmoAlteredCrossOutXl.style.transition = 'width 2s';
        gmoEngineeredCrossOutXl.style.transition = 'width 2s';
        gmoModifiedCrossOutXl.style.transition = 'width 2s';
        gmoLineXl.style.height = '921.5px';
        setTimeout(() => {
            gmoAlteredCrossOutXl.style.width = '270px';
        }, 1000);
        setTimeout(() => {
            gmoEngineeredCrossOutXl.style.width = '320px';
        }, 2000);
        setTimeout(() => {
            gmoModifiedCrossOutXl.style.width = '343px';
        }, 3000);
    };
    if (window.innerHeight > glutenIconRectTopXl && glutenLineSwitchXl === true) {
        glutenLineXl.style.transition = 'height 1s';
        glutenImageXl.style.transition = 'opacity 3s';
        glutenLineXl.style.height = '300px';
        glutenImageXl.style.opacity = '1';
        glutenLineSwitchXl = false;
    };
    if (window.innerHeight > glutenIconRectTopXl + 200) {
        glutenFirstCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenSecondCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenThirdCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenFourthCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenFifthCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenSixthCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenSeventhCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenEighthCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenNinthCityXl.style.transition = 'opacity 1s, transform 1s';
        glutenFirstCityXl.style.opacity = '1';
        glutenFirstCityXl.style.transform = 'translateY(0)';
        glutenFifthCityXl.style.opacity = '1';
        glutenFifthCityXl.style.transform = 'translateY(0)';
        glutenNinthCityXl.style.opacity = '1';
        glutenNinthCityXl.style.transform = 'translateY(0)';
        setTimeout(() => {
            glutenThirdCityXl.style.opacity = '1';
            glutenThirdCityXl.style.transform = 'translateY(0)';
            glutenFourthCityXl.style.opacity = '1';
            glutenFourthCityXl.style.transform = 'translateY(0)';
            glutenEighthCityXl.style.opacity = '1';
            glutenEighthCityXl.style.transform = 'translateY(0)';
        }, 200);
        setTimeout(() => {
            glutenSecondCityXl.style.opacity = '1';
            glutenSecondCityXl.style.transform = 'translateY(0)';
            glutenSixthCityXl.style.opacity = '1';
            glutenSixthCityXl.style.transform = 'translateY(0)';
            glutenSeventhCityXl.style.opacity = '1';
            glutenSeventhCityXl.style.transform = 'translateY(0)';
        }, 700);
    };
    if (window.innerHeight > glutenIconRectTopXl + 400) {
        glutenLineXl.style.transition = 'height 1s';
        glutenLineXl.style.height = '921.5px';
    };
});
if (window.innerHeight > veganIconRectTopXl && veganLineSwitchXl === true) {
    veganLineXl.style.transition = 'height 1s';
    veganImageXl.style.transition = 'opacity 3s';
    veganLineXl.style.height = '300px';
    veganImageXl.style.opacity = '1';
    veganLineSwitchXl = false;
};
if (window.innerHeight > veganBottomRectangleRectTopXl) {
    veganLineXl.style.transition = 'height 1s';
    veganFirstGraphXl.style.transition = 'opacity 1s, transform 1s';
    veganSecondGraphXl.style.transition = 'opacity 1s, transform 1s';
    veganThirdGraphXl.style.transition = 'opacity 1s, transform 1s';
    veganLineXl.style.height = '921.5px';
    veganFirstGraphXl.style.opacity = '1';
    veganFirstGraphXl.style.transform = 'translateX(0)';
    setTimeout(() => {
        veganSecondGraphXl.style.opacity = '1';
        veganSecondGraphXl.style.transform = 'translateX(0)';
    }, 200);
    setTimeout(() => {
        veganThirdGraphXl.style.opacity = '1';
        veganThirdGraphXl.style.transform = 'translateX(0)';
    }, 500);
};
if (window.innerHeight > gmoIconRectTopXl && gmoLineSwitchXl === true) {
    gmoLineXl.style.transition = 'height 1s';
    gmoImageXl.style.transition = 'opacity 3s';
    gmoLineXl.style.height = '300px';
    gmoImageXl.style.opacity = '1';
    gmoLineSwitchXl = false;
};
if (window.innerHeight > gmoIconRectTopXl + 400) {
    gmoLineXl.style.transition = 'height 1s';
    gmoAlteredCrossOutXl.style.transition = 'width 2s';
    gmoEngineeredCrossOutXl.style.transition = 'width 2s';
    gmoModifiedCrossOutXl.style.transition = 'width 2s';
    gmoLineXl.style.height = '921.5px';
    setTimeout(() => {
        gmoAlteredCrossOutXl.style.width = '270px';
    }, 1000);
    setTimeout(() => {
        gmoEngineeredCrossOutXl.style.width = '320px';
    }, 2000);
    setTimeout(() => {
        gmoModifiedCrossOutXl.style.width = '343px';
    }, 3000);
};
if (window.innerHeight > glutenIconRectTopXl && glutenLineSwitchXl === true) {
    glutenLineXl.style.transition = 'height 1s';
    glutenImageXl.style.transition = 'opacity 3s';
    glutenLineXl.style.height = '300px';
    glutenImageXl.style.opacity = '1';
    glutenLineSwitchXl = false;
};
if (window.innerHeight > glutenIconRectTopXl + 200) {
    glutenFirstCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenSecondCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenThirdCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenFourthCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenFifthCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenSixthCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenSeventhCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenEighthCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenNinthCityXl.style.transition = 'opacity 1s, transform 1s';
    glutenFirstCityXl.style.opacity = '1';
    glutenFirstCityXl.style.transform = 'translateY(0)';
    glutenFifthCityXl.style.opacity = '1';
    glutenFifthCityXl.style.transform = 'translateY(0)';
    glutenNinthCityXl.style.opacity = '1';
    glutenNinthCityXl.style.transform = 'translateY(0)';
    setTimeout(() => {
        glutenThirdCityXl.style.opacity = '1';
        glutenThirdCityXl.style.transform = 'translateY(0)';
        glutenFourthCityXl.style.opacity = '1';
        glutenFourthCityXl.style.transform = 'translateY(0)';
        glutenEighthCityXl.style.opacity = '1';
        glutenEighthCityXl.style.transform = 'translateY(0)';
    }, 200);
    setTimeout(() => {
        glutenSecondCityXl.style.opacity = '1';
        glutenSecondCityXl.style.transform = 'translateY(0)';
        glutenSixthCityXl.style.opacity = '1';
        glutenSixthCityXl.style.transform = 'translateY(0)';
        glutenSeventhCityXl.style.opacity = '1';
        glutenSeventhCityXl.style.transform = 'translateY(0)';
    }, 700);
};
if (window.innerHeight > glutenIconRectTopXl + 400) {
    glutenLineXl.style.transition = 'height 1s';
    glutenLineXl.style.height = '921.5px';
};
