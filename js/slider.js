
let data = [
    {
       id: 1,
       imageUrl: 'img/kanye-west-808s-heartbreak-kaws-2.jpg' ,
       url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'img/asap.jpg' ,
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'img/my-beautiful-darked.jpg' ,
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'img/kasabian.jpg' ,
        url: 'https://google.com'
    }

]


let sliderIndex = 0;


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');

function createAtag(item) {

    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('slide');

    return tag;
}

function createImgTag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.id);
    tagImage.classList.add('image-slider');

    return tagImage;
}



function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dot);
    });

    console.log(dots);

    return dots;
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);

    let dots = createDots();


    slideItem.appendChild(imgTag);


    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}


function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;

    setSlide();
}


arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);

setSlide();