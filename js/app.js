'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  minCustomers: 23,
  maxCustomer: 65,
  avgCookiesSold:6.3,
  id: 'ul1stAndPike',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for(var i=0; i<hours.length; i++) {
  pike.cookiesPerHour.push(Math.ceil(pike.hourlyCustomer(pike.minCustomers,pike.maxCustomer)*pike.avgCookiesSold));
}

pike.dailyTotal = function(){
  for(var i=0; i<this.cookiesPerHour.length; i++){
    pike.totalCookies += this.cookiesPerHour[i];
  }
};

pike.render= function(){
  var referenceUl = document.getElementById(this.id);
  for(var i =0; i<this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `We sold a total of ${pike.totalCookies}`;
  referenceUl.append(liElement);
};

pike.dailyTotal();
pike.render();

var seaTac = {
  minCustomers: 3,
  maxCustomer: 24,
  avgCookiesSold: 1.2,
  id: 'ulSeaTac',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for ( i=0; i<hours.length; i++) {
  seaTac.cookiesPerHour.push(Math.ceil(seaTac.hourlyCustomer(seaTac.minCustomers, seaTac.maxCustomer)*seaTac.avgCookiesSold));
}

seaTac.dailyTotal = function(){
  for(var i=0; i<this.cookiesPerHour.length; i++){
    seaTac.totalCookies += this.cookiesPerHour[i];
  }
};

seaTac.render= function(){
    // Vinicio - ok so line 70 is the one that's not working. As soon as this line
    // runs, we get a null value.
  var referenceUl = document.getElementById(this.id);
  for(var i = 0; i<this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `at ${hours[i]} we sold ${this.cookiesPerHour[i]}.`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `We sold a total of ${seaTac.totalCookies}`;
  referenceUl.append(liElement);
};

seaTac.dailyTotal();
seaTac.render();
