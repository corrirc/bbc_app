const LandmarkGridView = require('./views/grid_view'); //gridview
const Landmark = require('./models/landmark'); //model
const LandmarkView = require('./views/landmark_view');
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {

  const selectContinents = document.querySelector('#continents');

  const selectCountries = document.querySelector('#countries');
  const selectView = new SelectView(selectCountries, selectContinents);
  selectView.countriesbindEvents();
  selectView.continentsbindEvents();


  const landmarkContainer = document.querySelector('#landmarkgrid-container');
  const landmarkGridView = new LandmarkGridView(landmarkContainer);
  landmarkGridView.bindEvents();

  const landmarkViewContainer = document.querySelector('#landmark-info');
  const landmarkView = new LandmarkView(landmarkViewContainer);
  landmarkView.bindEvents();

  const landmark = new Landmark();
  landmark.bindEvents();
  landmark.getData();
});
