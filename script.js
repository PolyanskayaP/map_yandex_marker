ymaps.ready(init); 
var myMap;

function init() {

    myMap = new ymaps.Map("map", {
        center: [55.794259, 37.701448], // Координаты центра карты
        zoom: 15 // Маштаб карты
    }); 

    myMap.controls.add(
        new ymaps.control.ZoomControl()  // Добавление элемента управления картой
    ); 

    myPlacemark = new ymaps.Placemark([55.794259, 37.701448], { // Координаты метки объекта
        //balloonContent: "<div class='ya_map'>ИКБ</div>" // Подсказка метки
    }, {
        preset: "twirl#darkblueDotIcon" // Тип метки. Документация: https://yandex.ru/dev/maps/archive/doc/jsapi/2.0/ref/reference/option.presetStorage.html
        //iconLayout: "default#image",
        //iconImageHref: "./KBSP colour.png", // Ссылка на изображение 
        //iconImageSize: [53.5, 34.5], // Размер изображения 107, 69 
        //iconImageOffset: [-3, -42] // Положение изображения 
    });
    
    myMap.geoObjects.add(myPlacemark); // Добавление метки
    //myPlacemark.balloon.open(); // Открытие подсказки метки
    
};