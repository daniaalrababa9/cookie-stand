// 'use strict';
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function Newcookielocation(nameoflocation, min, max, avg) {
//     this.nameoflocation = nameoflocation;
//     this.min = min;
//     this.max = max;
//     this.avg = avg;
//     this.total = 0;
//     this.randomnumber = 0;
//     this.numberofcookiesperhour = [];
// }
// var newcookieform = document.getElementById("Addcookieshoplocation");
// newcookieform.addEventListener('submit', function (event) {
//     event.preventDefault();
//     var nameoflocation = event.target.nameoflocation.value;
//     console.log('name of location', nameoflocation);
//     var min = event.target.min.value;
//     console.log('min', min);
//     var max = event.target.max.value;
//     console.log('max', max);
//     var avg = event.target.avg.value;
//     console.log('avg', avg);
//     var newlocation = new Newcookielocation(nameoflocation, min, max, avg);
//     console.log('new location', newlocation)
//     newlocation.getthenumberofcookiesperhour();
//     newlocation.render();

// });

// Newcookielocation.prototype.randomInRange = function () {
//     var range = this.max - this.min;
//     var rand = (Math.random() * range) + this.min;
//     var randomnumber = Math.ceil(rand);
//     // console.log('random',randomnumber);

//     return randomnumber;

// };
// // console.log('random',this.randomInRange());

// Newcookielocation.prototype.getthenumberofcookiesperhour = function () {
//     for (var i = 0; i < hours.length; i++) {
//         var result1 = this.randomInRange(this.min, this.max);
//         var cookiespurchased1 = Math.ceil(this.avg * result1);
//         this.numberofcookiesperhour.push(cookiespurchased1);
//         this.total += cookiespurchased1;
//     }
// }
// // console.log('number of cookie',this.getthenumberofcookiesperhour());
// Newcookielocation.prototype.render = function () {
//     var contentArea = document.getElementById('container');
//     var table = document.createElement('table');
//     contentArea.appendChild(table);
//     var tr = document.createElement('tr');
//     table.appendChild(tr);
//     var th = document.createElement('th');
//     tr.appendChild(th);
// th.textContent='    ';
//     for (var i = 0; i < hours.length; i++) {
//         var th = document.createElement('th');
//         tr.appendChild(th);
//     th.textContent= hours[i];
//     }
//     var totalcookiesperlocation = document.createElement('th');
//     tr.appendChild(totalcookiesperlocation);
//     totalcookiesperlocation.textContent = 'Daily Location Total';
//     var tr = document.createElement('tr');
//     table.appendChild(tr);
//     var th = document.createElement('th');
//     tr.appendChild(th);
// th.textContent=this.nameoflocation;
// for (var i=0;i<hours.length;i++){
// var td =document.createElement('td');
// tr.appendChild(td);
// td.textContent=this.numberofcookiesperhour [i];
// }
// var td =document.createElement('td');
// tr.appendChild(td);
// td.textContent=this.total;
// }

