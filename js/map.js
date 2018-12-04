'use strict';


var makeVisible = function (item) {
  item.classList.remove('map--faded');
};

// создает случайное число в заданом диапазоне
var getRandomNumber = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

// создает массив
var getArray = function (item) {
  var array = [];
  for (var i = 0; i <= item; i++) {
    array.push(i);
  }
  return array;
}

var map = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin');
var cardTemplate = document.querySelector('#card');



// аватар
var arrayForAvatars =  getArray(8);

var getAvatarUrl = function () {
  var imgNumber = arrayForAvatars.splice(getRandomNumber(1, arrayForAvatars.length), 1);
  var imgUrl = 'img/avatars/user0' + imgNumber + '.png';
  return imgUrl;
};

console.log(getAvatarUrl());


var title = [
  'Большая уютная квартира', 'Маленькая неуютная квартира',
  'Огромный прекрасный дворец', 'Маленький ужасный дворец',
  'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];

var adress = "{{location.x}}, {{location.y}}";

var price = getRandomNumber(1000, 1000000);

var type = ['palace', 'flat', 'house', 'bungalo'];

var rooms = getRandomNumber(1, 5);

var guests = getRandomNumber(1, 10); //  how many guests?

var checkin = ['12:00', '13:00', '14:00'];

var checkout = ['12:00', '13:00', '14:00'];

var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

var description = '';

var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

/*var advertisement = {
  autor : {avatar : getAvatarUrl()},
  offer : {
    title: ,
    address: ,
    price: getRandomNumber(1000, 1000000),
    type: ,
    rooms: getRandomNumber(1, 5),
    guests: getRandomNumber(1, 10),
    checkin: ,
    checkout: ,
    features: ,
    description: '',
    photos:
  },
  location : {
    x: 0,
    y: 0
  }
}*/








/*var getPinTemplate = function (card) {
  var template = document.querySelector('#card').content.querySelector('.setup-similar-item');
  var templateElement = template.cloneNode(true);

  templateElement.querySelector('.popup__avatarsetup-similar-label').textContent = card.nameOfWizard;
  templateElement.querySelector('.wizard-coat').style.fill = card.coatColor;
  templateElement.querySelector('.wizard-eyes').style.fill = card.eyesColor;

  return templateElement;
};*/


makeVisible(map);
