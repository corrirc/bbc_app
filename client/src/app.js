const LandmarkGridView = require('./views/grid_view'); //gridview
const Landmark = require('./models/landmark'); //model
const LandmarkView = require('./views/landmark_view');
const NavView = require('./views/nav_view');

document.addEventListener('DOMContentLoaded', () => {
  const landmarkContainer = document.querySelector('#landmarkgrid-container');
  const landmarkGridView = new LandmarkGridView(landmarkContainer);
  landmarkGridView.bindEvents();

  const landmarkViewContainer = document.querySelector('#landmark-info');
  const landmarkView = new LandmarkView(landmarkViewContainer);
  landmarkView.bindEvents();

  const navViewContainer = document.querySelector('#nav');
  const navView = new NavView(navViewContainer);
  navView.bindEvents();


  const landmark = new Landmark();
  landmark.bindEvents();
  landmark.getData();
});
