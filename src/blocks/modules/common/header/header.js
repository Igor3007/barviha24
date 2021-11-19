// $(document).ready(function(){
//     $('.burger').on('click', function(){
//         $(this).toggleClass('open')
//         $('.main-menu').toggleClass('open')
//         $('header').toggleClass('open')

//         // var innerHeaderHeight = $('header').innerHeight()

//         // $('.mobile-menu').toggleClass('open').css({
//         //     'top': innerHeaderHeight+'px'
//         // })

//         $('html').toggleClass('hidden')
//     });


//     //закрыть при клике вне

//     $(document).on('click', function (e) {
//         var div = $(".burger, .main-menu");  //класс элемента вне которого клик
//         if (!div.is(e.target) && div.has(e.target).length === 0) {
//             //закрыть popup
//             if($('.burger').hasClass('open')){
//                 $('.burger').trigger('click')
//             }
            
//         }
//     });

   
// })

function $(elem){
    return document.querySelector(elem)
}

$('.burger').addEventListener('click', function(event){

    event.stopPropagation(true)

    this.classList.toggle('open')
    $('.main-menu').classList.toggle('open')
    $('header').classList.toggle('open')
    $('html').classList.toggle('hidden')
})

document.addEventListener("scroll", function(){
    let scrollTop = document.querySelector('html').scrollTop;
    let start = 350;

    let p = (scrollTop/start)*100;

    document.querySelector('header').style.backgroundColor = 'rgba(255,255,255,'+p+'%)' 

    if(scrollTop > start){
        document.querySelector('header').classList.add('fixed')
        
    }else{
        document.querySelector('header').classList.remove('fixed')
    }

})