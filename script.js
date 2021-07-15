var navMenuAnchorTags=document.querySelectorAll('#header_navigation a');
var responsivenavMenuAnchorTags=document.querySelectorAll('.responsive-navigation a');
var interval;
var targetSectionID;
var targetSection;

function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
          if(targetSectionCoordinates.top<=0){
              clearInterval(interval);
              return;
          }
          window.scrollBy(0,50);
}


for(var i=0;i<navMenuAnchorTags.length;++i){
    navMenuAnchorTags[i].addEventListener('click',function(event){
       event.preventDefault();
       targetSectionID=this.textContent.trim().toLowerCase();
       if(targetSectionID!="home"){
       targetSection=document.getElementById(targetSectionID);
       interval=setInterval(scrollVertically,20,targetSection);
    }
    });
}

for(var i=0;i<responsivenavMenuAnchorTags.length;++i){
    responsivenavMenuAnchorTags[i].addEventListener('click',function(event){
       event.preventDefault();
       targetSectionID=this.textContent.trim().toLowerCase();
       if(targetSectionID!="home"){
       var targetSection=document.getElementById(targetSectionID);
       interval=setInterval(scrollVertically,20,targetSection);
    }
    });
}

