const PubSub = require('../helpers/pub_sub.js');
const LandmarkGridItemView = require('./item_view.js');

const LandmarkGridView = function (container) {
  this.container = container;
}

LandmarkGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Landmarks:data-loaded', (event) => {
    this.render(event.detail);
  });
};

module.exports = LandmarkGridView;
