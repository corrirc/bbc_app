const PubSub = require('../helpers/pub_sub');

  const SelectView = function (selectElementCountry, selectElementContinent) {
    this.selectElementCountry = selectElementCountry;
    this.selectElementContinent = selectElementContinent;
  };

  SelectView.prototype.countriesbindEvents = function () {
    PubSub.subscribe('LandmarkModel:countries-ready', (evt) => {
      this.populateSelect(this.selectElementCountry, evt.detail);
  });

  SelectView.prototype.continentsbindEvents = function () {
    PubSub.subscribe('LandmarkModel:continents-ready', (evt) => {
      this.populateSelect(this.selectElementContinent, evt.detail);
  });

  this.selectElementCountry.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('DropdownView:country-selected', selectedIndex);
    });
  };

  this.selectElementContinent.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('DropdownView:continent-selected', selectedIndex);
    });
  };

  SelectView.prototype.populateSelect = function (container, items) {
    items.forEach((item) => {
        const option = document.createElement('option');
        option.textContent = item;
        option.classList.add('option')
        container.appendChild(option);
    });
  };

module.exports = SelectView;
