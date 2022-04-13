const URL_VUE = '/js/lib/vue.min.js'
const URL_QUIZ = '/js/lib/quiz.js'
const URL_MASKA = '/js/lib/maska.js'
const URL_YMAPS = '/js/lib/YMaps.js'


/*=====================================================
loadScript
=====================================================*/

window.loadScript = function (url, callback) {
    var script = document.createElement("script");

    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

window.loadVue = function (callback) {
    if (!window.VueLoaded) {
        window.VueLoaded = true;
        window.loadScript(URL_VUE, function () {
            callback();
            console.info('Vue loaded')
        })

    } else {
        callback();
        console.info('Vue loaded')
    }
}

//scroll to view

function scrollToTargetAdjusted(elem) {
    var element = document.getElementById(elem);
    var headerOffset = 70;
    var elementPosition = element.offsetTop
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

/* =======================================================
header
======================================================= */
function $(elem) {
    return document.querySelector(elem)
}

function closeMobileMenu() {
    $('.burger').classList.remove('open')
    $('.main-menu').classList.remove('open')
    $('header').classList.remove('open')
    $('html').classList.remove('hidden')
}

$('.burger').addEventListener('click', function (event) {

    event.stopPropagation(true)
    this.classList.toggle('open')
    $('.main-menu').classList.toggle('open')
    $('header').classList.toggle('open')
    $('html').classList.toggle('hidden')
})

document.addEventListener('click', function () {
    closeMobileMenu()
})

$('.main-menu__close').addEventListener('click', function () {
    closeMobileMenu()
})

$('.main-menu').addEventListener('click', function (event) {
    event.stopPropagation(true)
})

function onScrollStopped(domElement, callback, timeout = 250) {
    domElement.addEventListener('scroll', () => {

        if (document.querySelector('.header-slide-up')) {
            document.querySelector('header.fixed').classList.remove('header-slide-up')
        }

        clearTimeout(callback.timeout);
        callback.timeout = setTimeout(callback, timeout);
    });
}

onScrollStopped(window, () => {

    let scrollTop = document.querySelector('html').scrollTop;

    if (document.querySelector('header.fixed') && scrollTop > 60) {
        document.querySelector('header.fixed').classList.add('header-slide-up')
    }

    // console.log('scroll stopped');
}, 1000);

if (!$('header').classList.contains('header-layout-page')) {
    document.addEventListener("scroll", function () {
        let scrollTop = document.querySelector('html').scrollTop;
        let start = 350;
        let paddMin = 15;
        let paddMax = 30;
        let p = (scrollTop / start) * 100;

        let paddingCurrent = (paddMax - ((scrollTop / start) * paddMin))

        $('header').style.backgroundColor = 'rgba(255,255,255,' + p + '%)'


        if (paddingCurrent >= 15) {
            $('header').style.padding = paddingCurrent + 'px 0'
        }

        if (scrollTop > start) {
            $('header').classList.add('fixed')

        } else {
            $('header').classList.remove('fixed')
        }

    })

}


const anchors = document.querySelectorAll('.main-menu__nav a[href*="#"], .footer__nav a[href*="#"]')

anchors.forEach(function (anchor, item) {
    anchor.addEventListener('click', function (e) {

        if (window.location.pathname == '/') {
            e.preventDefault();
        }

        const blockID = this.getAttribute('href').substr(2);

        scrollToTargetAdjusted(blockID)
        closeMobileMenu()

    })
})


if ($('.fb-inmap')) {
    $('.fb-inmap').addEventListener('click', function () {
        scrollToTargetAdjusted('yamaps')
    })
}


//не скрывать меню при фокусе

if (document.querySelector('header')) {
    var topBarContainer = document.querySelector('header')

    topBarContainer.addEventListener('mouseenter', function () {
        this.classList.add('header-show-hover')
    })

    topBarContainer.addEventListener('mouseleave', function () {
        this.classList.remove('header-show-hover')
        this.classList.remove('header-slide-up')
    })



}
/*=====================================================
Maska
=====================================================*/

function initMaska() {
    var mask = Maska.create("input[type=tel]", {
        mask: '#(###)###-##-##'
    });

    var masknumber = Maska.create("input[data-masked=number]", {
        mask: '#*'
    });
}

if (window.Maska) {
    initMaska()
}

//add simple support for background images:
document.addEventListener('lazybeforeunveil', function (e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});


window.onload = function () {
    document.querySelector('body').classList.remove('perf-no-animation');
};

document.addEventListener("DOMContentLoaded", function () {


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

    document.querySelectorAll('[data-fancybox]').forEach(function (item) {
        item.addEventListener('click', function () {
            const ITEM = [{
                src: this.dataset.src,
                type: 'inline'
            }]
            const fancyboxInstanse = new Fancybox(ITEM, {
                //mainClass: 'container-quiz-popup'
            });

            fancyboxInstanse.on("done", function (fancybox, slide) {
                initMaska()
            })
        })
    })

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

    if (document.querySelector('.inmap-filter__find')) {

        document.querySelector('.inmap-filter__find input').addEventListener('focus', function (e) {
            document.querySelector('.inmap-filter__result').classList.add('open')
            document.querySelector('#inmap').scrollIntoView({
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
    }



    //============================================================================
    //============================================================================
    //============================================================================

    function elementInViewport(el) {
        var bounds = el.getBoundingClientRect();
        return (
            (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
            (window.innerHeight - bounds.top > 0) && // Выше нижней
            (bounds.left + bounds.width > 0) && // Правее левой
            (window.innerWidth - bounds.left > 0) // Левее правой
        );
    }

    function quizInit() {

        window.loadScript(URL_MASKA, function () {
            console.log('maska loaded')
        })
        window.loadScript(URL_QUIZ, function () {
            console.log('quize loaded')
        })
    }

    if (document.querySelector(".section-quiz-block")) {
        document.addEventListener("scroll", (e) => {
            var el = document.querySelector(".section-quiz-block");
            var inViewport = elementInViewport(el); //true если виден

            if (inViewport && !window.quizLoad) {
                window.quizLoad = true;
                if (!window.Vue) {

                    window.loadVue(function () {
                        quizInit()
                    })

                } else {
                    quizInit()
                }
            }

        })
    }



    /* ======================================================================= */
    /* ======================================================================= */
    /* ======================================================================= */
    /* ======================================================================= */

    if (document.querySelector('[data-popup="quiz"]')) {
        document.querySelector('[data-popup="quiz"]').addEventListener('click', function () {

            const ITEMS = [{
                src: '<div class="box-quiz-popup" ><div id="app-quiz" ></div></div>',
                type: "html",
            }]
            const fancyboxInstanseQuiz = new Fancybox(ITEMS, {
                mainClass: 'container-quiz-popup'
            });

            fancyboxInstanseQuiz.on("done", function (fancybox, slide) {

                window.loadVue(function () {
                    quizInit()
                })

            })

        })
    }

    /* ======================================================
    inmaap
    ====================================================== */
    if (document.querySelector('.section-inmap-block')) {

        document.addEventListener("scroll", (e) => {
            var el = document.querySelector(".section-inmap-block");
            var inViewport = elementInViewport(el); //true если виден

            if (inViewport && !window.inMapFilterViewport) {
                window.inMapFilterViewport = true;
                if (!window.ymaps) {
                    window.loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&loadByRequire=1", function () {
                        ymaps.load(mapInit());
                    });
                } else {
                    if (!window.inMapFilter) {
                        mapInit()
                    }
                }
            }

        })



        function mapInit() {

            window.loadScript(URL_YMAPS, function () {

                const YM = new YMaps()
                let pointsArray = [{
                    'coordinates': '55.714225, 37.848540',
                    'markerImage': '/img/svg/ic_pen-ymaps.svg',
                }, ]

                if (typeof window.MAP_PARAMS != 'undefined') {
                    pointsArray = window.MAP_PARAMS;
                }

                YM.mapsParams.container = 'inmap';
                YM.mapsParams.params.center = pointsArray[0].coordinates.split(',')

                YM.init(function () {
                    YM.addPlacemark(pointsArray)
                    //YM.autoScale()
                })

            })


        }




    }

    //nouislider

    document.querySelectorAll('[data-noui="range"]').forEach(function (slider) {
        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            padding: [4, 4],


        });

        slider.noUiSlider.on('update', function (data) {
            console.log(data)

            let inputs = slider.closest('.filter-range-price__range, .filter-range__range').querySelectorAll('input[type=text]')

            inputs[0].value = data[0]
            inputs[1].value = data[1]

        })
    })



    //open filter in mobile

    if (document.querySelector('.filter-toggle')) {
        document.querySelector('.filter-toggle .btn').addEventListener('click', function () {
            document.querySelector('.filter-box').classList.toggle('open')

            let closeElem = document.createElement('div')
            closeElem.classList.add('filter-box__close')

            document.querySelector('.filter-box').prepend(closeElem)

            closeElem.addEventListener('click', function () {
                document.querySelector('.filter-box').classList.remove('open')
                closeElem.remove()
            })
        })

    }

    //card slider


    if (document.querySelector('.card-slider__thumbs')) {
        document.querySelector('.card-slider__gallery').addEventListener('click', function () {
            const IMAGE_ARR = [];
            const IMAGE = document.querySelectorAll('.card-slider__thumbs [data-gallery-src]');

            console.log(IMAGE)

            IMAGE.forEach(function (item, index) {

                IMAGE_ARR.push({
                    src: item.dataset.gallerySrc,
                    type: "image",
                })

            })

            Fancybox.show(IMAGE_ARR)
        })


        if (document.querySelector('[data-swiper-next="card-gallery"]')) {
            document.querySelector('[data-swiper-next="card-gallery"]')
                .addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            document.querySelector('[data-swiper-prev="card-gallery"]')
                .addEventListener('click', function (event) {
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


        function initialSlideCard() {
            if (!document.querySelector('.swiper-video')) {
                return 0;
            } else {
                if (document.querySelectorAll('.card-slider__thumbs .swiper-wrapper > div').length <= 1) {
                    return 0;
                } else {
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
    }







}); //DOMContentLoaded