const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const Landmark = function(url) {
  this.url = url;
}

Landmark.prototype.bindEvents = function() {
  PubSub.subscribe("LandmarkGridItemView:landmark-selected", event => {
    const landmarkName = event.detail;
    const request = new Request(`${this.url}/${landmarkName}`);
    request
      .get()
      .then(data => {
        PubSub.publish("LandmarkModel:landmark-ready", data);
      })
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