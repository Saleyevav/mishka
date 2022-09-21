ymaps.ready(init); // когда апи готово, инициализируемя карту
var customMap; // объявим переменную для карты
function init() {
  // функция инициализации
  customMap = new ymaps.Map("customMap", {
    // создадим карту выведем ее в див с id="customMap"
    center: [59.938635, 30.323118], // центра карты
    behaviors: ["default", "scrollZoom"], // скроллинг колесом
    zoom: 17, // масштаб карты
    controls: ["zoomControl", "fullscreenControl"], // элементы управления
  });

  customPlacemark0 = new ymaps.Placemark(
    [59.938635, 30.323118],
    {
      // Создаем метку с координатами точки
      balloonContent:
        '<h4> Заголовок метки</h4><p>Описание метки.</p><a class="customMapClose" onclick="customMap.balloon.close()">X</a>',
      // содержимое балуна в формате html, все стили в css
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../img/map-pin.png", // картинка иконки
      iconImageSize: [66, 100], // размер иконки в пикселях
      iconImageOffset: [-33, -100], // позиция иконки в пикселях(считается от верхнего левого угла)
    },
  );

  // Добавляем метки на карту
  customMap.geoObjects.add(customPlacemark0);
}
