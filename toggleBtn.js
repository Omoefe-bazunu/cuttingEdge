let toggleStatus = false;

let toggleBtn = function() {
    let getmemuList = document.querySelector(aside);
    let getmenuUl = document.querySelector(aside ul );
    let getmenuSpan = document.querySelector(aside ul .menuHome);
    let getmenuLinks = document.querySelector(aside ul a);

    if (toggleStatus === false){
        getmenuUl.style.visibilty = 'visible';
        getmemuList.style.width = "270px";
        getmenuSpan.style.opacity = "0.5";

        let menuLinks = getmenuLinks.length;
        for ( let i = 0, i < menuLinks, i++){
            getmenuLinks[i].style.opacity = "0.5";
        }

        toggleStatus = true;
    } 
    else if (toggleStatus === true){
        getmenuUl.style.visibilty = 'hidden';
        getmemuList.style.width = "50px";
        getmenuSpan.style.opacity = "0";

        let menuLinks = getmenuLinks.length;
        for ( let i = 0, i < menuLinks, i++){
            getmenuLinks[i].style.opacity = "0";
        }

        toggleStatus =false;

}
}