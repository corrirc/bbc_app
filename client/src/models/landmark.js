const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const Landmark = function(url) {
  this.url = url;
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