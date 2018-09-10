const PubSub = require('../helpers/pub_sub.js');
const LandmarkGridItemView = require('./item_view.js');

const LandmarkGridView = function (container) {
  this.container = container;
}

LandmarkGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Landmarks:data-loaded', (event) => {
    const menuItems = this.render(event.detail);
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event) => {
        const selectedLandmark = event.target;
        PubSub.publish('LandmarkGridItemView:landmark-selected', selectedLandmark);
      });
    });
  });
};

LandmarkGridView.prototype.render = function (landmarks) {
  this.container.innerHTML = '';
  const landmarkGridItemView = new LandmarkGridItemView(this.container);
  landmarks.forEach((landmark) => {
    landmarkGridItemView.render(landmark)
  });
};

module.exports = LandmarkGridView;
