'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  minCustomers: 23,
  maxCustomer: 65,
  avgCookiesSold: 6.3,
  id: 'ul1st-and-pike',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hourlyTotals: function() {
    for ( var i=0; i<hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.hourlyCustomer(this.minCustomers, this.maxCustomer)*this.avgCookiesSold));
    }
  },
  dailyTotal: function(){
    for(var i=0; i<this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  dailyStats: function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  },
  render: function(){
    var referenceUl = document.getElementById(this.id);
    for(var i = 0; i<this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;
      referenceUl.append(liElement);
    }
    liElement.textContent = `We sold a total of ${this.totalCookies}`;
    referenceUl.append(liElement);
  }
};

pike.dailyStats();

var seaTac = {
  minCustomers: 3,
  maxCustomer: 24,
  avgCookiesSold: 1.2,
  id: 'ul-SeaTac',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hourlyTotals: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.hourlyCustomer(this.minCustomers, this.maxCustomer)*this.avgCookiesSold));
    }
  },
  dailyTotal: function(){
    for(var i=0; i<this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  dailyStats: function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  },
  render: function(){
    var referenceUl = document.getElementById(this.id);
    for(var i = 0; i<this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;
      referenceUl.append(liElement);
    }
    liElement.textContent = `We sold a total of ${this.totalCookies}`;
    referenceUl.append(liElement);
  }
};

seaTac.dailyStats();

var seaCenter = {
  minCustomers: 11,
  maxCustomer: 38,
  avgCookiesSold: 3.7,
  id: 'ul-seattle-center',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hourlyTotals: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.hourlyCustomer(this.minCustomers, this.maxCustomer)*this.avgCookiesSold));
    }
  },
  dailyTotal: function(){
    for(var i=0; i<this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  dailyStats: function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  },
  render: function(){
    var referenceUl = document.getElementById(this.id);
    for(var i = 0; i<this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;
      referenceUl.append(liElement);
    }
    liElement.textContent = `We sold a total of ${this.totalCookies}`;
    referenceUl.append(liElement);
  }
};

seaCenter.dailyStats();

var capHill = {
  minCustomers: 20,
  maxCustomer: 38,
  avgCookiesSold: 2.3,
  id: 'ul-capitol-hill',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hourlyTotals: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.hourlyCustomer(this.minCustomers, this.maxCustomer)*this.avgCookiesSold));
    }
  },
  dailyTotal: function(){
    for(var i=0; i<this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  dailyStats: function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  },
  render: function(){
    var referenceUl = document.getElementById(this.id);
    for(var i = 0; i<this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;
      referenceUl.append(liElement);
    }
    liElement.textContent = `We sold a total of ${this.totalCookies}`;
    referenceUl.append(liElement);
  }
};

capHill.dailyStats();

var alki = {
  minCustomers: 2,
  maxCustomer: 16,
  avgCookiesSold: 4.6,
  id: 'ul-alki',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  hourlyTotals: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.hourlyCustomer(this.minCustomers, this.maxCustomer)*this.avgCookiesSold));
    }
  },
  dailyTotal: function(){
    for(var i=0; i<this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  dailyStats: function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  },
  render: function(){
    var referenceUl = document.getElementById(this.id);
    for(var i = 0; i<this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;
      referenceUl.append(liElement);
    }
    liElement.textContent = `We sold a total of ${this.totalCookies}`;
    referenceUl.append(liElement);
  }
};

alki.dailyStats();

