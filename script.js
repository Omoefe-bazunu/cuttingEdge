const slides = document.querySelectorAll('.mySlides');
let currentSlide = 0;

function showSlide() {
    slides[currentSlide].style.opacity = 0;
    slides[currentSlide].querySelector('.overlay-text').style.bottom = '-100px'; // Slide text down
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].querySelector('.overlay-text').style.bottom = '0'; // Slide text up
}

// Set an initial timer for the first slide
setTimeout(showSlide, 0);

// Set timers for subsequent slides with a gap of 3 seconds or less
setInterval(showSlide, 6000);

let servicesList = document.querySelector(".ServicesList");
let mediaList = document.querySelector(".MediaList");
let servicesLink = document.querySelector(".ServicesLink");
let mediaLink = document.querySelector(".MediaLink");


servicesLink.addEventListener('mouseover', function() {
    servicesList.style.opacity = 1;
    servicesList.style.visibility = 'visible';
})


mediaLink.addEventListener('mouseover', function() {
    mediaList.style.opacity = 1
    mediaList.style.visibility = 'visible';
})

servicesList.addEventListener('mouseover', function() {
    this.style.opacity = 1;
    this.style.visibility = 'visible';
})

servicesLink.addEventListener('mouseout', function() {
    servicesList.style.opacity = 0;
    servicesList.style.visibility = 'hidden';
})


mediaLink.addEventListener('mouseout', function() {
    mediaList.style.opacity = 0
    mediaList.style.visibility = 'hidden';
})

mediaList.addEventListener('mouseover', function() {
    this.style.opacity = 1
    this.style.visibility = 'visible';
})

servicesList.addEventListener('mouseout', function() {
    this.style.opacity = 0;
    this.style.visibility = 'hidden';
})


mediaList.addEventListener('mouseout', function() {
    this.style.opacity = 0;
    this.style.visibility = 'hidden';
})

let toggleBtn = document.querySelector(".toggle-btn");
let toggleStatus = false;

const toggle = () => {
    let toggleDiv = document.querySelector("aside");
    let toggleUl = document.querySelector("aside ul");
    let toggleList = document.querySelectorAll("aside ul li a"); 

    if (toggleStatus === false) {
        toggleDiv.style.visibility = 'visible'
        toggleUl.style.visibility = 'visible';
        toggleDiv.style.width = '150px';


        for (let i = 0; i < toggleList.length; i++) { 
            toggleList[i].style.opacity = 1;
        }

        toggleStatus = true;
    } else if (toggleStatus === true) {
        toggleDiv.style.visibility = 'hidden'
        toggleDiv.style.width = '50px';

        for (let i = 0; i < toggleList.length; i++) { 
            toggleList[i].style.opacity = 0;
        }

        toggleUl.style.visibility = 'hidden';

        toggleStatus = false;
    }
}

toggleBtn.addEventListener('click', toggle);


let formBtn = document.querySelector('.SubmitBtn');
let nameInput = document.querySelector('.name');
let emailInput = document.querySelector('.emailAd');
let messageInput = document.querySelector('.MESSAGE');

formBtn.addEventListener('click', promptMessage = () => {
    if(messageInput.textContent === ""){
        alert("Please input a message and resend. Thanks")
    }
    else {
        alert("Thanks for reaching out!, Your message has been sent and awaits feedback when the website is fully functional.")
    }
})