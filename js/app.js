'use strict';

function Cookieshop(shoplocation, min, max, avg) {
    this.shoplocation = shoplocation;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.total = 0;
    this.randomnumber = 0;
    this.numberofcookiesperhour = [];

};
var numberofcookiesperhour = [];

var seattle = new Cookieshop('seattle', 23, 65, 6.3);
var tokyo = new Cookieshop('tokyo', 3, 24, 1.2);
var dubai = new Cookieshop('dubai', 11, 38, 3.7);
var paris = new Cookieshop('paris', 20, 38, 2.3);
var lima = new Cookieshop('lima', 2, 16, 4.6);
var locationsnames = [seattle, tokyo, dubai, paris, lima];
Cookieshop.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var randomnumber = Math.ceil(rand);
    return randomnumber;
};


Cookieshop.prototype.calculatenumberofcookies = function () {
    for (var i = 0; i < 14; i++) {
        var result1 = this.randomInRange(this.min, this.max);
        var cookiespurchased1 = Math.ceil(this.avg * result1);
        this.numberofcookiesperhour.push(cookiespurchased1);
        this.total += cookiespurchased1;
    }
}



for (var i = 0; i < locationsnames.length; i++) {
    console.log('totaldata', locationsnames[i]);
    locationsnames[i].calculatenumberofcookies();
}



console.log('Seattle', numberofcookiesperhour);


var contentArea = document.getElementById('content-area');
var cookietable = document.createElement('table');
contentArea.appendChild(cookietable);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function renderHeaderRow(table) {

    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    var Header = document.createElement('th');
    headerRow.appendChild(Header);
    Header.textContent = '     ';
    // var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < hours.length; i++) {
        var hoursstring = document.createElement('th');
        headerRow.appendChild(hoursstring);
        hoursstring.textContent = hours[i];
    }
    var totalcookiesperlocation = document.createElement('th');
    headerRow.appendChild(totalcookiesperlocation);
    totalcookiesperlocation.textContent = 'Daily Location Total';
}



renderHeaderRow(cookietable);

// var headerRow = document.createElement('tr');
// cookietable.appendChild(headerRow);
// var Header = document.createElement('th');
// headerRow.appendChild(Header);
// Header.textContent = '     ';
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// for (var i = 0; i < hours.length; i++) {
//     var hoursstring = document.createElement('th');
//     headerRow.appendChild(hoursstring);
//     hoursstring.textContent = hours[i];

// var totalcookiesperlocation = document.createElement('th');
// headerRow.appendChild(totalcookiesperlocation);
// totalcookiesperlocation.textContent = 'Daily Location Total';

Cookieshop.prototype.renderDataRows = function () {
    var dataRow = document.createElement('tr');
    cookietable.appendChild(dataRow);

    var shoplocationNames = document.createElement('th');
    dataRow.appendChild(shoplocationNames);
    shoplocationNames.textContent = this.shoplocation;

    for (var i = 0; i < this.numberofcookiesperhour.length; i++) {

        var cookiesperhour = document.createElement('td');
        dataRow.appendChild(cookiesperhour);
        cookiesperhour.textContent = this.numberofcookiesperhour[i];
    }
    var totalcookies = document.createElement('td');
    dataRow.appendChild(totalcookies);
    totalcookies.textContent = this.total;
};
for (var i = 0; i < locationsnames.length; i++) {

    this.locationsnames[i].renderDataRows();

}
// var dataRow = document.createElement('tr');
// cookietable.appendChild(dataRow);
// var totalsperhour = document.createElement('td');
// dataRow.appendChild(totalsperhour);
// totalsperhour.textContent = 'Totals';
// for (var i = 0; i < 14; i++) {
//     var totalsperhours = document.createElement('td');
//     dataRow.appendChild(totalsperhours);
//     totalsperhours.textContent = seattle.numberofcookiesperhour[i] + tokyo.numberofcookiesperhour[i] + dubai.numberofcookiesperhour[i] + paris.numberofcookiesperhour[i] + lima.numberofcookiesperhour[i];


// }
// var totaloftotal = document.createElement('td');
// dataRow.appendChild(totaloftotal);
// totaloftotal.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;




function renderfooterRows(table) {
    var HeaderRow = document.createElement('tr');
    table.appendChild(HeaderRow);
    var totalsperhour = document.createElement('td');
    HeaderRow.appendChild(totalsperhour);
    totalsperhour.textContent = 'Totals';
    for (var i = 0; i < 14; i++) {
        var totalsperhours = document.createElement('td');
        HeaderRow.appendChild(totalsperhours);
        totalsperhours.textContent = seattle.numberofcookiesperhour[i] + tokyo.numberofcookiesperhour[i] + dubai.numberofcookiesperhour[i] + paris.numberofcookiesperhour[i] + lima.numberofcookiesperhour[i];


    }
    var totaloftotal = document.createElement('td');
    HeaderRow.appendChild(totaloftotal);
    totaloftotal.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;


}
renderfooterRows(cookietable);
