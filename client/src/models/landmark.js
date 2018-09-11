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
    console.log(event.detail);
    const toggleId = event.detail.id;
    const payload = event.detail.status;
    request = new Request(`${this.url}/${toggleId}`);
    request
    .update(toggleId, payload);
  })
}

Landmark.prototype.getData = function() {
  const request = new Request(this.url);
  request
    .get()
    .then(data => {
      PubSub.publish("Landmarks:data-loaded", data);
    })
    .catch(console.error);
}


module.exports = Landmark;
