var menutags = document.querySelectorAll('.nav-menu a');
for (var i=0;i<menutags.length;i++){
    menutags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,61);
        },50);
    });
}
/* for making the above code general */

/*
var menutags=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<menutags.length;i++){
    menutags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
         console.log(targetSection);
         interval=setInterval(verticalScroll,50,targetSection);
    });
}
function verticalScroll(targetSection){
var targetSectionCoordinates=targetSection.getBoundingClientRect();
            console.log(targetSectionCoordinates.top);
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,80);
}
*/

/*=================================================================*/
/*--------------------------SKILL-SECTION--------------------------*/
/*=================================================================*/
var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);



/*=================================================================*/
/*----------------------PERCENTAGE-VIEWED--------------------------*/
/*=================================================================*/

var scrolledBar = document.getElementById("scrolled");

// This function will return the maximum of the following 
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight
    );
}
var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function (e) {
    docHeight = getDocHeight();
    windowHeight = window.innerHeight;
};

// This function uses a for loop for individual progress bars. You can modify it so that it applies to the whole skill section at once
function setScrolled() {
    
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    
    scrolledBar.innerText = scrolled;
    
}
window.addEventListener("scroll", setScrolled);