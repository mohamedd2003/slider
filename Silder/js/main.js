var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBox = document.getElementById("lightBox");
var closeIcon = document.querySelector("#close");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var lightboxImg = document.querySelector(".lightbox-item");
var currentIndex=0;
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    lightBox.classList.remove("d-none");
    var imgSrc = e.target.src;
    currentIndex=imgs.indexOf(e.target)
    lightboxImg.style.cssText=`background-image:url(${imgSrc})`;
  });
}
closeIcon.addEventListener("click", closeSlider);
function closeSlider()
{
        lightBox.classList.add("d-none");
}

next.addEventListener("click",getNextSlide)
function getNextSlide()
{
    currentIndex++
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    var imgSrc =imgs[currentIndex].src;
    lightboxImg.style.cssText=`background-image:url(${imgSrc})`;
 
}
prev.addEventListener('click',getPrevSlide)
function getPrevSlide()
{
   
    currentIndex--
    if(currentIndex<0){
        currentIndex=imgs.length-1
    }
    var imgSrc =imgs[currentIndex].src;
    lightboxImg.style.cssText=`background-image:url(${imgSrc})`;
 
}

document.addEventListener('keydown',function(e)
{
    if(e.key=='ArrowRight'){
        getNextSlide()
    }
   else if(e.key=='ArrowLeft'){
        getPrevSlide()
    }
    else if(e.key=='Escape')
    {
                closeSlider()        
    }
})

