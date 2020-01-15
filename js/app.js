'use strict';
var footerRow;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cookieshop(shoplocation, min, max, avg) {
    this.shoplocation = shoplocation;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.total = 0;
    this.numberofcookiesperhour = [];
    // this.calculatenumberofcookies ();

};
var locationsnames = [];


locationsnames.push(new Cookieshop('seattle', 23, 65, 6.3));
locationsnames.push(new Cookieshop('tokyo', 3, 24, 1.2));
locationsnames.push(new Cookieshop('dubai', 11, 38, 3.7));
locationsnames.push(new Cookieshop('paris', 20, 38, 2.3));
locationsnames.push(new Cookieshop('lima', 2, 16, 4.6));

Cookieshop.prototype.randomInRange = function() {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var randomnumber = Math.ceil(rand);
    return randomnumber;
};
Cookieshop.prototype.calculatenumberofcookies = function() {
    for (var i = 0; i < hours.length; i++) {
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
$('#content-area').html('<table></table>');
let rowTable = $(`<tr></tr>`);
let headerTable = $(`<th></th>`);
let cellTable = $(`<td></td>`)


Cookieshop.prototype.rows = function() {
    $('table').append($(`<tr id= "${this.shoplocation}"><td>${this.shoplocation}</td></tr>`));

    for (let i = 0; i < this.numberofcookiesperhour.length; i++) {
        $(`#${this.shoplocation}`).append($(`<td>${this.numberofcookiesperhour[i]}</td>`))
    }

    $(`#${this.shoplocation}`).append($(`<td>${this.total}</td>`))
}

function headerRow() {
    $('table').append(rowTable.append(headerTable.text('   ')));

    for (let i = 0; i < hours.length; i++) {
        $('tr').append($(`<th>${hours[i]}</th>`));
    }

    $('tr').append($(`<th>Daily Location Total</th>`));
};
Cookieshop.prototype.render = function() {
    $('table').append($(`<tr class= "${this.shoplocation}"><td>${this.shoplocation}</td></tr>`));

    for (let i = 0; i < this.numberofcookiesperhour.length; i++) {
        $(`.${this.shoplocation}`).append($(`<td>${this.numberofcookiesperhour[i]}</td>`))
    }

    $(`.${this.shoplocation}`).append($(`<td>${this.total}</td>`))
}

function footerRow() {

    $('table').append($(`<tr class="footer"><td>Total</td></tr>`));

    let totals = 0;

    for (let i = 0; i < hours.length; i++) {

        var hourlyTotal = 0;
        for (let j = 0; j < locationsnames.length; j++) {
            hourlyTotal += locationsnames[j].numberofcookiesperhour[i]
        }

        $(`.footer`).append($(`<td>${hourlyTotal}</td>`))

        totals += hourlyTotal
    }

    $(`.footer`).append($(`<td>${totals}</td>`))
};
headerRow()
for (let i = 0; i < locationsnames.length; i++) {
    let location = locationsnames[i];
    location.render()
}
footerRow();


$('#Addcookieshoplocation').submit(function(event) {
    event.preventDefault();
    var shoplocation = event.target.shoplocation.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avg = parseFloat(event.target.avg.value);
    var newlocation = new Cookieshop(shoplocation, min, max, avg);
    locationsnames.push(newlocation);
    newlocation.rows();
    footerRow();

})