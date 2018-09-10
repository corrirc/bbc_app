const LandmarkGridView = require('./views/grid_view'); //gridview
const Landmark = require('./models/landmark'); //model

document.addEventListener('DOMContentLoaded', () => {
  const landmarkContainer = document.querySelector('#landmarkgrid-container');
  const landmarkGridView = new LandmarkGridView(landmarkContainer);
  landmarkGridView.bindEvents();

  const landmark = new Landmark();
  landmark.bindEvents();
  landmark.getData();
});
