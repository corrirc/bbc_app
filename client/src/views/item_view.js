const LandmarkGridItemView = function (container) {
  this.container = container;
};

LandmarkGridItemView.prototype.render = function (landmark) {
  const landmarkContainer = document.createElement('div');
  landmarkContainer.class = 'landmark';

  const landmarkName = this.createHeading(landmark.landmark_name)
};

module.exports = LandmarkGridItemView;
