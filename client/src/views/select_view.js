const PubSub = require('../helpers/pub_sub');

  const SelectView = function (selectElementCountry, selectElementContinent) {
    this.selectElementCountry = selectElementCountry;
    this.selectElementContinent = selectElementContinent;
  };

  SelectView.prototype.countriesbindEvents = function () {
    PubSub.subscribe('LandmarkModel:countries-ready'), (evt) => {
      this.populateSelect(evt.detail);
  });

  SelectView.prototype.continentsbindEvents = function () {
    PubSub.subscribe('LandmarkModel:continents-ready'), (evt) => {
      this.populateSelect(evt.detail);
  });

  this.selectElementCountry.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('DropdownView:country-selected', selectedIndex);
    });
  };

  this.selectElementContinent.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('DropdownView:continents-selected', selectedIndex);
    });
  };

  SelectView.prototype.populateSelect = function (item) {
    items.forEach(item, index) => {
        const option = document.createElement('div');
        option.textContent = item;
        option.value = index;
        option.classList.add('option')
        this.selectElementCountry.appendChild(option);
    });
  };

  // SelectView.prototype.populateSelect = function (continents) {
  //   countries.forEach((continents, index) => {
  //       const option = document.createElement('div');
  //       option.textContent = countries;
  //       option.value = index;
  //       option.classList.add('option')
  //       this.selectElement.appendChild(option);
  //   });
  // };


module.exports = SelectView;
