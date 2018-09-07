const LandGridView = ('') //gridview
const Landmark = require('') //model

document.addEventListener('DOMContentLoaded') , () => {
  const landmarkContainer = document.querySelector('div#landmarks');
  const landmarkGridView = new LandGridView(Container);
  landmarkGridView.bindEvents();

  const landmark = new Landmark();
  games.bindEvents();
  games.getData();

});
