const keys = require('../../config/keys');

const mapWrapper = function(location) {
  let mapFrame = document.createElement('iframe');
  mapFrame.classList.add('map');
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${keys.gmaps}&q=${location}`
  mapFrame.src = mapSrc;
  mapFrame.height = '400';

  return mapFrame;
}

module.exports = mapWrapper;
