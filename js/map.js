'use strict';


var makeVisible = function (item) {
  item.classList.remove('map--faded');
};

// создает случайное число в заданом диапазоне
var getRandomNumber = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

// дает одно из значений массива

var getOneRandomArrayElement = function (array) {
  var randomArrayElement = array[getRandomNumber(0, array.length)];
  return randomArrayElement;
};

// создает массив
var getArray = function (item) {
  var array = [];
  for (var i = 0; i <= item; i++) {
    array.push(i);
  }
  return array;
};

var map = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin');
var cardTemplate = document.querySelector('#card');


// аватар, адрес не должен повторяться

var arrayForAvatars = getArray(8);

var getAvatarUrl = function () {
  var imgNumber = arrayForAvatars.splice(getRandomNumber(1, arrayForAvatars.length), 1);
  var imgUrl = 'img/avatars/user0' + imgNumber + '.png';
  return imgUrl;
};

// предложение

var titles = [
  'Большая уютная квартира', 'Маленькая неуютная квартира',
  'Огромный прекрасный дворец', 'Маленький ужасный дворец',
  'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];

var getTitle = function () {
  var offerTitle = titles.splice(getRandomNumber(1, titles.length), 1);
  return offerTitle.toString();
};

var adress = '{{location.x}}, {{location.y}}';

var types = ['palace', 'flat', 'house', 'bungalo'];

var timeframes = ['12:00', '13:00', '14:00'];

var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

var getFeatures = function () {
  var newFeatures = [];
  var numberOfElements = getRandomNumber(0, features.length);
  for (var i = 0; i < numberOfElements; i++) {
    var randomFeature = features.splice(getRandomNumber(1, features.length), 1);
    newFeatures.push(randomFeature.toString());
  }
  return newFeatures;
};

var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var getArrayOfPhotos = function () {
  var compareRandom = function () {
    return Math.random() - 0.5;
  };
  var newPhotos = photos.sort(compareRandom);
  return newPhotos;
};

var advertisement = {
  autor: {avatar: getAvatarUrl()},
  offer: {
    title: getTitle(),
    address: adress,
    price: getRandomNumber(1000, 1000000),
    type: getOneRandomArrayElement(types),
    rooms: getRandomNumber(1, 5),
    guests: getRandomNumber(1, 10),
    checkin: getOneRandomArrayElement(timeframes),
    checkout: getOneRandomArrayElement(timeframes),
    features: getFeatures(),
    description: '',
    photos: getArrayOfPhotos()
  },
  location: {
    x: 0,
    y: 0
  }
};

makeVisible(map);
