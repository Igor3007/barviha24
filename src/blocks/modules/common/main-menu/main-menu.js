// // плавный скролл
    
// var $page = $('html, body');
// $('.main-menu li a[href*="#"]').on('click', function() {

//     let height = $('.header-top').height()

//     $page.animate({
//         scrollTop: ($($.attr(this, 'href')).offset().top) - height
//     }, 400);
//     $('.burger').trigger('click')
//     return false;
// });

function $(elem){
    return document.querySelector(elem)
}

function closeMobileMenu() {
    $('.burger').classList.remove('open')
    $('.main-menu').classList.remove('open')
    $('header').classList.remove('open')
    $('html').classList.remove('hidden')
}


document.addEventListener('click', function(){
    closeMobileMenu()
})

$('.main-menu__close').addEventListener('click', function(){
    closeMobileMenu()
})

$('.main-menu').addEventListener('click', function(event){
    event.stopPropagation(true)
})