import "./import/modules";
import "./import/components";

import svgPolyfill from "svg4everybody";
import Inputmask from "inputmask";
import lazysizes from "lazysizes"
import Swiper, {
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';
Swiper.use([Pagination, Navigation, EffectFade]);


//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e){
  var bg = e.target.getAttribute('data-bg');
  if(bg){
      e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});


//svgPolyfill(); 
//Swiper.use([Pagination, Navigation]);

document.addEventListener("DOMContentLoaded", function () {

    /* inputmask */

  if(document.querySelector("input[type=tel]")){
    const IMaskPhone = new Inputmask("9(999)999-99-99")
    IMaskPhone.mask(document.querySelector("input[type=tel]"))
  }


  /* swiper gallery */

  function updateFraction(slider) {
    const { params, activeIndex } = slider;
  
    document.querySelector('.counter-current').innerText = String(activeIndex + 1).padStart(2, '0')
    document.querySelector('.counter-total').innerText = (slider.slides.length)
  
     
  }

  var swiper2 = new Swiper('[data-swiper="gallery"]', {

    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '[data-swiper-next="gallery"]',
      prevEl: '[data-swiper-prev="gallery"]',
    },
    
    on: {
      init() {
        setTimeout(updateFraction, 0, this);
      },
      slideChange() {
        updateFraction(this);
      },
      resize() {
        updateFraction(this);
      },
    },

  });

  function updateFraction2(slider) {
    const { params, activeIndex } = slider;

    let slideContent = slider.slides[activeIndex].querySelector('.adv-block-content').outerHTML

    document.querySelector('.advantages-block__slide .container').innerHTML = slideContent;
  
    document.querySelector('.advantages-block__counter .counter-current').innerText = String(activeIndex + 1).padStart(2, '0')
    document.querySelector('.advantages-block__counter .counter-total').innerText = (slider.slides.length)
     
  }


  var swiperAdv = new Swiper('[data-swiper="advantages"]', {

    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    navigation: {
      nextEl: '[data-swiper-next="advantages"]',
      prevEl: '[data-swiper-prev="advantages"]',
    },
    
    on: {
      init() {
        setTimeout(updateFraction2, 0, this);
      },
      slideChange() {
        updateFraction2(this);
      },
      resize() {
        updateFraction2(this);
      },
    },

  });


  var swiperMinicard = new Swiper('[data-swiper="minicard"]', {

    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '[data-swiper-next="minicard"]',
      prevEl: '[data-swiper-prev="minicard"]',
    },
  });

  var swiperTeam = new Swiper('[data-swiper="team"]', {

    slidesPerView: 2,
    spaceBetween: 100,
    navigation: {
      nextEl: '[data-swiper-next="team"]',
      prevEl: '[data-swiper-prev="team"]',
    },
  });

  var swiperTeam2 = new Swiper('[data-swiper="similar"]', {

    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '[data-swiper-next="similar"]',
      prevEl: '[data-swiper-prev="similar"]',
    },
  });

  /* wewewewewe */

    /* ============================================================== */
    /* ============================================================== */

    // function galleryShowMore(setmax){

    //     var container = document.querySelector('.catalog-block__list')
    //     var table = container.querySelector('ul')
    //     var max = (setmax ? setmax : 30)

    //     if(table.querySelectorAll('').length <= max){
    //         $('[data-gallery="tmore"]').hide()
    //     }

    //     table.find('li').not('.li-show').each(function(index){
    //         if(index < max ){
    //             $(this).addClass('li-show')
    //         }
    //     })

    //   }

    //   $(document).on('click', '[data-gallery="tmore"]',function(event){
    //       galleryShowMore(12)
    //   })

    //   galleryShowMore(12)

    //   /* ================================================== */
    //   /* ================================================== */

    //   $(document).on('click', '[data-tabs="nav"] li', function(event){
          
    //       if($(this).index() == 4){
    //           $('.leagues__arhive').show()
    //       }else{
    //           $('.leagues__arhive').hide()
    //       }
          
    // })



});//DOMContentLoaded

