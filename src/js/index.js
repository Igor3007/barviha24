import "./import/modules";
import "./import/components";

import svgPolyfill from "svg4everybody";
import Inputmask from "inputmask";
import lazysizes from "lazysizes"
import Swiper, {
  Pagination,
  Navigation,
} from 'swiper';
Swiper.use([Pagination, Navigation]);


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



});//DOMContentLoaded

