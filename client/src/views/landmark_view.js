const PubSub = require('../helpers/pub_sub');

const LandmarkView = function(container) {
  this.container = container;
}

LandmarkView.prototype.bindEvents() = function() {
  PubSub.subscribe("LandmarkGridItemView:landmark-selected", landmark => {
    this.render(landmark);
  })
}

LandmarkView.prototype.render = function(landmark) {
  this.container.innerHTML = '';

  const landmarkName = document.createElement('h2');
  landmarkName.textContent = landmark.name;
  this.container.appendChild(landmarkName);

  const landmarkImage = document.createElement('img');
  landmarkImage.src = landmark.image;
  this.container.appendChild(landmarkImage);

  const landmarkLocation = document.createElement('p');
  landmarkLocation.textContent = `Location: ${landmark.location}`
  this.container.appendChild(landmarkLocation);

  const landmarkFacts = document.createElement('p');
  landmarkFacts.textContent = landmark.facts.
  this.container.appendChild(landmarkFacts);
}

module.exports = LandmarkView;