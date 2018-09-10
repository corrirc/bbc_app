const LandmarkGridItemView = function (container) {
  this.container = container;
};

LandmarkGridItemView.prototype.render = function (landmark) {
  const landmarkContainer = document.createElement('div');
  landmarkContainer.classList.add('landmark');
  landmarkContainer.id = landmark._id;


  const landmarkName = this.createHeading(landmark.landmark_name);
  landmarkContainer.appendChild(landmarkName);

  const landmarkPic = this.createImage(landmark.clipart);
  landmarkContainer.appendChild(landmarkPic);

  const beenThere = this.createToggle(false);
  landmarkContainer.appendChild(beenThere);

  this.container.appendChild(landmarkContainer);
};

LandmarkGridItemView.prototype.createHeading = function (landmarkName) {
  const heading = document.createElement('h2');
  heading.textContent = landmarkName;
  return heading;
};

LandmarkGridItemView.prototype.createImage = function (picture) {
  const landmarkImage = document.createElement('img');
  landmarkImage.src = picture;
  return landmarkImage
};

LandmarkGridItemView.prototype.createToggle = function (status) {
  const toggleDiv = document.createElement('div')
  const beenThere = document.createElement('label');
  beenThere.textContent = "I've Been There"
  toggleDiv.appendChild(beenThere);
  const switchLabel = document.createElement('label');
  switchLabel.classList.add('switch');
  toggleDiv.appendChild(switchLabel);
  const inputType = document.createElement('input');
  inputType.type = "checkbox";
  switchLabel.appendChild(inputType);
  const slider = document.createElement('span');
  slider.classList.add('slider');
  switchLabel.appendChild(slider);
  return toggleDiv;
};

module.exports = LandmarkGridItemView;
