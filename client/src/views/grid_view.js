const PubSub = require('../helpers/pub_sub.js');
const LandmarkGridItemView = require('./item_view.js');

const LandmarkGridView = function (container) {
  this.container = container;
}

LandmarkGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Landmarks:data-loaded', (event) => {
    // All landmarkViews stored in the array 'landmarkViews' then iterated through 
    // to add an event listener to each one.
    const landmarkViews = this.render(event.detail);
    
    landmarkViews.forEach((landmarkView) => {
      // Full landmark info to be rendered when the image is clicked on so the
      // image element is stored  in this variable.
      const image = landmarkView.getElementsByTagName('img')[0];
      image.addEventListener('click', (event) => {
        // The landmark ID was added to the enclosing container so this is 
        // retirieved here to allow the full record to be searched for in the DB.
        const landmarkID = event.target.parentNode.id;
        PubSub.publish('LandmarkGridItemView:landmark-selected', landmarkID);
      });

      const toggle = landmarkView.getElementsByTagName('input')[0];
      toggle.addEventListener('click', (event) => {
        const id = event.target.parentNode.parentNode.parentElement.id;
        const status = event.target.checked
        // Only the status field needs to be updated so both that and the 
        // landmark ID are added in this object to be used later by the model
        // in a PUT request.
        const data = {
          id: id,
          status: status
        }
        PubSub.publish('landmarkGridItemView:toggled', data);
      })
    });
  });
};

LandmarkGridView.prototype.render = function (landmarkViews) {
  this.container.innerHTML = '';
  const landmarkGridItemView = new LandmarkGridItemView(this.container);
  landmarkViews.forEach((landmark) => {
    landmarkGridItemView.render(landmark)
  });

  const landmarkItems = document.querySelectorAll('div.landmark');
  return landmarkItems;
};

module.exports = LandmarkGridView;
