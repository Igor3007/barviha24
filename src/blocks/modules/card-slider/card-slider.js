import Swiper, {
    Pagination,
    Navigation,
    Thumbs,
  } from 'swiper';

//import { Fancybox } from "@fancyapps/ui";

Swiper.use([Pagination, Navigation, Thumbs]);

if(document.querySelector('.card-slider__thumbs')){
    document.querySelector('.card-slider__gallery').addEventListener('click', function(){
        const IMAGE_ARR = [];
        const IMAGE = document.querySelectorAll('.card-slider__thumbs [data-gallery-src]');
    
        console.log(IMAGE)
    
        IMAGE.forEach(function(item, index){
    
            IMAGE_ARR.push({
                src: item.dataset.gallerySrc,    
                type: "image",  
            })
            
        })
    
        Fancybox.show(IMAGE_ARR)
    })
}

if(document.querySelector('[data-swiper-next="card-gallery"]')){
    document.querySelector('[data-swiper-next="card-gallery"]')
            .addEventListener('click', function(event){
        event.stopPropagation()
    })
    document.querySelector('[data-swiper-prev="card-gallery"]')
            .addEventListener('click', function(event){
        event.stopPropagation()
    })
}

/* карточка */

const galleryThumbs = new Swiper('[data-swiper="thumbs-gallery"]', {
    spaceBetween: 28,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    
    breakpoints: {
        0: {
        slidesPerView: 3,
        spaceBetween: 4,
          },
        480: {
          slidesPerView: 3,
          spaceBetween: 7,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1380: {
          slidesPerView: 3,
        }
      }
});


function initialSlideCard(){
    if(!document.querySelector('.swiper-video')){
        return 0;
    }else{
        if(document.querySelectorAll('.card-slider__thumbs .swiper-wrapper > div').length <= 1){
            return 0;
        }else{
            return 1;
        }
    }
}


const galleryTop = new Swiper('[data-swiper="card-gallery"]', {
    spaceBetween: 10,
    initialSlide: initialSlideCard(),

    navigation: {
        nextEl: '[data-swiper-next="card-gallery"]',
        prevEl: '[data-swiper-prev="card-gallery"]',
    },
    breakpoints: {
        0: {
            pagination: {
                el: '.swiper-dots',
                type: 'bullets',
            }
        }
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

// galleryTop.on('slideChange', function () {
//     $('.video').removeClass('play');
//     $('.video').find('iframe').remove();
//     $('.swiper-topbar, .swiper-bottombar').show()
// });