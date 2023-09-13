

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
