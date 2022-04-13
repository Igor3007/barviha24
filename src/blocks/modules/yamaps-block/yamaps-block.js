import {
    YMaps
} from '../../components/YMaps/YMaps';


if (document.querySelector('.section-inmap-block')) {

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