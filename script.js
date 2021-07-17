/*Add Auto Fill to skill bars of the skills section*/

function initialiseBar(bar){
    bar.style.width=0+'%';
}

function fillBar(bar){
    let targetWidth=bar.getAttribute('data-bar-width');
    let currentWidth=0;
    let interval=setInterval(function(){
       if(currentWidth>=targetWidth){
       clearInterval(interval);
       }
       currentWidth++;
       bar.style.width=currentWidth+'%'
    },5);  
}

var animationDone=[false,false,false,false,false,false];
function checkScroll(){
    var progressBars=document.querySelectorAll('.skill-progress > div');
    let count=0;
    for(let bar of progressBars){
        let coordinates=bar.getBoundingClientRect();
        if(!animationDone[count]&&coordinates.top<=window.innerHeight-coordinates.height){
            initialiseBar(bar);
            fillBar(bar);
            animationDone[count]=true;
        }
        else if(animationDone[count]==true&&coordinates.top>window.innerHeight){
            initialiseBar(bar);
            animationDone[count]=false;
        }
        ++count;
    }
}

window.addEventListener('scroll',checkScroll);

/*Add Smooth Scroll to navigation section of header*/


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

