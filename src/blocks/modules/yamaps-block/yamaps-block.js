import {
    YMaps
} from '../../components/YMaps/YMaps';


if (document.querySelector('.section-inmap-block')) {

    function loadScript(url, callback) {
        var script = document.createElement("script");

        if (script.readyState) { // IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // Другие браузеры
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    function elementInViewport(el) {
        var bounds = el.getBoundingClientRect();
        return (
            (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
            (window.innerHeight - bounds.top > 0) && // Выше нижней
            (bounds.left + bounds.width > 0) && // Правее левой
            (window.innerWidth - bounds.left > 0) // Левее правой
        );
    }

    document.addEventListener("scroll", (e) => {
        var el = document.querySelector(".section-inmap-block");
        var inViewport = elementInViewport(el); //true если виден

        if (inViewport && !window.inMapFilterViewport) {
            window.inMapFilterViewport = true;
            if (!window.ymaps) {
                loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&loadByRequire=1", function () {
                    ymaps.load(mapInit());
                });
            } else {
                if (!window.inMapFilter) {
                    mapInit()
                }
            }
        }

    })

    const YM = new YMaps()
    let pointsArray = [{
        'coordinates': '55.714225, 37.848540',
        'markerImage': '/img/svg/ic_pen-ymaps.svg',
    }, ]

    if (typeof window.MAP_PARAMS != 'undefined') {
        pointsArray = window.MAP_PARAMS;
    }

    function mapInit() {
        YM.mapsParams.container = 'inmap';
        YM.mapsParams.params.center = pointsArray[0].coordinates.split(',')

        YM.init(function () {
            YM.addPlacemark(pointsArray)
            //YM.autoScale()
        })
    }




}