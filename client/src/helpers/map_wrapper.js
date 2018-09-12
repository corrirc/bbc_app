const keys = require('../../config/keys');

const mapWrapper = function(name, location, continent) {
  let mapFrame = document.createElement('iframe');
  mapFrame.classList.add('map');
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${keys.gmaps}&q=${name},${location},${continent}&zoom=5`
  mapFrame.src = mapSrc;
  mapFrame.height = '400';

  return mapFrame;
}

module.exports = mapWrapper;
