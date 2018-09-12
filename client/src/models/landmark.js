const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const Landmark = function() {
  this.url = 'http://localhost:3000/api/landmarks';
}

Landmark.prototype.bindEvents = function() {
  PubSub.subscribe("LandmarkGridItemView:landmark-selected", event => {
    const landmarkID = event.detail;
    let request = new Request(`${this.url}/${landmarkID}`);
    request
      .get()
      .then(data => {
        PubSub.publish("LandmarkModel:landmark-selected", data[0]);
      })
  })

  PubSub.subscribe('landmarkGridItemView:toggled', (event) => {
    const toggleId = event.detail.id;
    const payload = event.detail.status;
    request = new Request(`${this.url}`);
    request
    .update(toggleId, payload);
  })

  PubSub.subscribe('DropdownView:country-selected', event => {
    const country = event.detail;
    const request = new Request(`${this.url}/countries/${country}`)
    request
      .get()
      .then(data => {
        PubSub.publish('Landmarks:data-loaded', data);
      })
  })

  PubSub.subscribe('DropdownView:continent-selected', event => {
    const continent = event.detail;
    const request = new Request(`${this.url}/continents/${continent}`)
    request
      .get()
      .then(data => {
        PubSub.publish('Landmarks:data-loaded', data);
      })
  })
}

Landmark.prototype.getData = function() {
  const request = new Request(this.url);
  request
    .get()
    .then(data => {
      PubSub.publish('Landmarks:data-loaded', data);
      PubSub.publish('LandmarkModel:countries-ready', this.getCountires(data));
      PubSub.publish('LandmarkModel:continents-ready', this.getContinents(data));
    })
    .catch(console.error);
}

Landmark.prototype.getCountires = function(landmarks) {
  const countries = landmarks.map(landmark => {
    return landmark.landmark_location;
  })
  const unique =  countries
    .filter((country, index, array) => { return array.indexOf(country) === index });
  return unique;
}

Landmark.prototype.getContinents = function(landmarks) {
  const continents = landmarks.map(landmark => {
    return landmark.continent;
  })
  const unique =  continents
    .filter((continent, index, array) => { return array.indexOf(continent) === index });
  return unique;
}

module.exports = Landmark;
