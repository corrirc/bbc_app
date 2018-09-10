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
  const label = document.createElement('label');
  label.classList.add('switch');
  label.textContent = "I've Been There"
  toggleDiv.appendChild(label);
  const inputType = document.createElement('input');
  inputType.type = "checkbox";
  label.appendChild(inputType);
  return toggleDiv;
};

module.exports = LandmarkGridItemView;
