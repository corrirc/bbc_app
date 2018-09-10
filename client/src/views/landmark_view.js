const PubSub = require('../helpers/pub_sub');

const LandmarkView = function(container) {
  this.container = container;
}

LandmarkView.prototype.bindEvents = function() {
  PubSub.subscribe("LandmarkModel:landmark-selected", landmark => {
    this.render(landmark.detail);  
  })
}

LandmarkView.prototype.render = function(landmark) {  
  this.container.innerHTML = '';

  const landmarkName = document.createElement('h2');
  landmarkName.textContent = landmark.landmark_name;  
  this.container.appendChild(landmarkName);

  const landmarkImage = document.createElement('img');
  landmarkImage.src = landmark.landmark_picture;
  this.container.appendChild(landmarkImage);

  const landmarkLocation = document.createElement('h3');
  landmarkLocation.textContent = `Location: ${landmark.landmark_location}`
  this.container.appendChild(landmarkLocation);

  const landmarkFacts = document.createElement('p');
  landmarkFacts.textContent = landmark.landmark_facts;
  this.container.appendChild(landmarkFacts);

  const didYouKnowHeader = document.createElement('h3');
  didYouKnowHeader.textContent = 'Did you know?';
  this.container.appendChild(didYouKnowHeader);

  const didYouKnowFact = document.createElement('p');
  didYouKnowFact.textContent = landmark.did_you_know_fact;
  this.container.appendChild(didYouKnowFact);

  const landmarkLink = document.createElement('a');
  landmarkLink.href = landmark.landmark_url;
  landmarkLink.textContent = 'Click for more info.'
  this.container.appendChild(landmarkLink);
}

module.exports = LandmarkView;