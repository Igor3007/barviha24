document.addEventListener("DOMContentLoaded", function () {

    /*=====================================================
       swiper gallery
       =====================================================*/

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

    /*=====================================================
    swiper advantages
    =====================================================*/

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

    /*=====================================================
    swiper team
    =====================================================*/

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

    /*=====================================================
    swiper similar
    =====================================================*/

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

    /* ===============================================
    map
    ===============================================*/

    if (document.querySelector('.section-yamaps-block')) {

        document.addEventListener("scroll", (e) => {
            var el = document.querySelector(".section-yamaps-block");
            var inViewport = elementInViewport(el); //true если виден

            if (inViewport && !window.inMapFilterViewport) {
                window.inMapFilterViewport = true;
                if (!window.ymaps) {
                    window.loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&loadByRequire=1", function () {
                        ymaps.load(mapInitVillage());
                    });
                } else {
                    if (!window.inMapFilter) {
                        mapInitVillage()
                    }
                }
            }

        })


        function mapInitVillage() {

            window.loadScript(URL_YMAPS, function () {

                const YM = new YMaps()
                let pointsArray = [{
                    'coordinates': '55.714225, 37.848540',
                    'markerImage': '/img/svg/ic_pen-ymaps.svg',
                }, ]

                if (typeof window.MAP_PARAMS != 'undefined') {
                    pointsArray = window.MAP_PARAMS;
                }

                YM.mapsParams.container = 'mapcontainer';
                YM.mapsParams.params.center = pointsArray[0].coordinates.split(',')

                YM.init(function () {
                    YM.addPlacemark(pointsArray)
                    //YM.autoScale()
                })

            })


        }




    }

})