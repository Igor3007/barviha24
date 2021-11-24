

function $(elem){
    return document.querySelector(elem)
}

function closeMobileMenu() {
    $('.burger').classList.remove('open')
    $('.main-menu').classList.remove('open')
    $('header').classList.remove('open')
    $('html').classList.remove('hidden')
}

$('.burger').addEventListener('click', function(event){

    event.stopPropagation(true)
    this.classList.toggle('open')
    $('.main-menu').classList.toggle('open')
    $('header').classList.toggle('open')
    $('html').classList.toggle('hidden')
})

if(!$('header').classList.contains('header-layout-page')){
    document.addEventListener("scroll", function(){
        let scrollTop = document.querySelector('html').scrollTop;
        let start = 350;
        let paddMin = 15;
        let paddMax = 30;
        let p = (scrollTop/start)*100;

        let paddingCurrent = (paddMax - ((scrollTop/start)*paddMin)) 

        $('header').style.backgroundColor = 'rgba(255,255,255,'+p+'%)' 
    

        if(paddingCurrent >= 15 ){
            $('header').style.padding = paddingCurrent+'px 0' 
        }

        if(scrollTop > start){
            $('header').classList.add('fixed')
            
        }else{
            $('header').classList.remove('fixed')
        }

    })
}


//scroll to view

function scrollToTargetAdjusted(elem){
    var element = document.getElementById(elem);
    var headerOffset = 70;
    var elementPosition = element.offsetTop
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

const anchors = document.querySelectorAll('.main-menu__nav a[href*="#"], .footer__nav a[href*="#"]')

anchors.forEach(function(anchor, item) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = this.getAttribute('href').substr(1);

    scrollToTargetAdjusted(blockID) 
    closeMobileMenu()

  })
})


if($('.fb-inmap')){
    $('.fb-inmap').addEventListener('click', function(){
        scrollToTargetAdjusted('yamaps') 
    })
}


