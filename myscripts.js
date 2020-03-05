var menutags=document.querySelectorAll('.nav-menu a');
for(var i=0;i<menutags.length;i++){
    menutags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
         console.log(targetSection);
        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            console.log(targetSectionCoordinates.top);
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,80);
        },50);
    });
}