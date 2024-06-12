var timerSlider, slider, sliderImgs, slideWidth, cpt;


window.onload = () => {
    const sliderBox = document.querySelector(".slider");
    slider = document.querySelector(".slider-imgs");

    cpt = 0;

    slideWidth = sliderBox.getBoundingClientRect().width;

    let firstImg = slider.firstElementChild.cloneNode(true);
    slider.appendChild(firstImg);

    sliderImgs = Array.from(slider.children);
    let next = document.querySelector(".arrow.right");
    let prev = document.querySelector(".arrow.left");

    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrevious);

    timerSlider = setInterval(slideNext, 5000);

    slider.addEventListener("mouseover", stopTimerSlider);
    slider.addEventListener("mouseout", startTimerSlider);

}

function slideNext() {
    cpt++;
    let decal = -slideWidth * cpt;
    slider.style.transition = "0.5s linear";
    slider.style.transform = "translateX(" + decal + "px)";

    setTimeout( function(){
        if(cpt >= sliderImgs.length - 1) {
            cpt = 0;
            slider.style.transition = "unset";
            slider.style.transform = "translateX(0)";
        }
    }, 400);

    
}

function slidePrevious() {
    cpt--;
    slider.style.transition = "0.5s linear";

    if(cpt < 0) {
        cpt = sliderImgs.length - 1;
        slider.style.transition = "unset";
        slider.style.transform = "translateX(" + -slideWidth*cpt + "px)";
        setTimeout(slidePrevious, 1);
    }

    let decal = -slideWidth * cpt;
    slider.style.transform = "translateX(" + decal + "px)";
}

function stopTimerSlider(){
    clearInterval(timerSlider);
}

function startTimerSlider(){
    timerSlider = setInterval(slideNext, 5000);
}

// Form