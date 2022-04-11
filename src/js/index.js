import "./import/modules";
import "./import/components";

import svgPolyfill from "svg4everybody";
import Inputmask from "inputmask";
import lazysizes from "lazysizes";
import {
  Fancybox
} from "@fancyapps/ui";
import Swiper, {
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';
Swiper.use([Pagination, Navigation, EffectFade]);


//add simple support for background images:
document.addEventListener('lazybeforeunveil', function (e) {
  var bg = e.target.getAttribute('data-bg');
  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});


svgPolyfill();

window.onload = function () {
  document.querySelector('body').classList.remove('perf-no-animation');
};

document.addEventListener("DOMContentLoaded", function () {

  /* inputmask */
  if (document.querySelector("input[type=tel]")) {
    const IMaskPhone = new Inputmask("9(999)999-99-99")


    document.querySelectorAll("input[type=tel]").forEach(function (item, index) {
      IMaskPhone.mask(item)
    })
  }

  /* swiper gallery */

  function updateFraction(slider) {
    const {
      params,
      activeIndex
    } = slider;
    document.querySelector('.counter-current').innerText = String(activeIndex + 1).padStart(2, '0')
    document.querySelector('.counter-total').innerText = (slider.slides.length)
  }

  var swiper2 = new Swiper('[data-swiper="gallery"]', {

    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
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
    const {
      params,
      activeIndex
    } = slider;

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
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
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
    observer: true,
    observeParents: true,
    loop: true,
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
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      940: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1376: {
        slidesPerView: 2,
        spaceBetween: 100
      }
    }


  });

  var swiperTeam2 = new Swiper('[data-swiper="similar"]', {

    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '[data-swiper-next="similar"]',
      prevEl: '[data-swiper-prev="similar"]',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }

  });

  //fancybox

  Fancybox.bind("[data-fancybox]", {
    autoFocus: false,
  });

  //sdsdsds

  var sliderVilages = new Swiper('[data-swiper="vilages"]', {

    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: '[data-swiper-next="vilages"]',
      prevEl: '[data-swiper-prev="vilages"]',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: {
          enabled: true,
          sticky: true
        }
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      940: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 25
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 25
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }

  });

  //================================


  document.querySelector('.inmap-filter__find input').addEventListener('focus', function (e) {
    document.querySelector('.inmap-filter__result').classList.add('open')
    document.querySelector('.inmap-filter__find').scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  })

  document.querySelector('.inmap-filter').addEventListener('click', function (e) {
    e.stopPropagation()
  })



  document.querySelector('.section-inmap-block').addEventListener('click', function () {
    document.querySelector('.inmap-filter__result').classList.remove('open')
  })

  document.querySelectorAll('[data-filter="show"]').forEach(function (item) {
    item.addEventListener('click', function () {
      this.parentNode.classList.toggle('open')
    })
  })



}); //DOMContentLoaded