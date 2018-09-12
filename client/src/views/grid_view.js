const PubSub = require('../helpers/pub_sub.js');
const LandmarkGridItemView = require('./item_view.js');

const LandmarkGridView = function (container) {
  this.container = container;
}

LandmarkGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Landmarks:data-loaded', (event) => {
    const menuItems = this.render(event.detail);
    menuItems.forEach((menuItem) => {
      const image = menuItem.getElementsByTagName('img')[0];
      image.addEventListener('click', (event) => {
        const landmarkID = event.target.parentNode.id;
        PubSub.publish('LandmarkGridItemView:landmark-selected', landmarkID);
      });
      const toggle = menuItem.getElementsByTagName('input')[0];
      toggle.addEventListener('click', (event) => {
        const id = event.target.parentNode.parentNode.parentElement.id;
        const status = event.target.checked
        const data = {
          id: id,
          status: status
        }
        PubSub.publish('landmarkGridItemView:toggled', data);
      })
    });
  });
};

LandmarkGridView.prototype.render = function (landmarks) {
  this.container.innerHTML = '';
  const landmarkGridItemView = new LandmarkGridItemView(this.container);
  landmarks.forEach((landmark) => {
    landmarkGridItemView.render(landmark)
  });

  const landmarkItems = document.querySelectorAll('div.landmark');
  return landmarkItems;
};

module.exports = LandmarkGridView;
