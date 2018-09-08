const LandmarkGridItemView = function (container) {
  this.container = container;
};

LandmarkGridItemView.prototype.render = function (landmark) {
  const landmarkContainer = document.createElement('div');
  landmarkContainer.class = 'landmark';

  const landmarkName = this.createHeading(landmark.landmark_name);
  landmarkContainer.appendChild(landmarkName);

  const landmarkPic = this.createImage(landmark.clipart);
  landmarkPic.appendChild(landmarkPic);

  this.container.appendChild(landmarkContainer);
};

LandmarkGridItemView.prototype.createHeading = function (landarkName) {
  const heading = document.createElement('h2');
  heading.textContent = landmarkName;
  return heading;
};

LandmarkGridItemView.prototype.createImage = function (picture) {
  const landmarkImage = document.createElement('img');
  landmarkImage.src = picture;
  return landmarkImage
};

module.exports = LandmarkGridItemView;
