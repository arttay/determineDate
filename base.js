
var baseDate = new Date(2015, 10, 26);
var date = new Date();
var year = date.getFullYear();

/*
var baseDate = new Date(2023, 10, 23);
var date = new Date();
var year = date.getFullYear();
var tomorrow = new Date(baseDate);
*/
var leap = function (year) {
  var date = new Date(year, 1, 29);  
  return date.getMonth() === 1 ? true : false;
}
var days = leap(year) ? 364 : 364;

var nextYearDay = tomorrow.setDate(baseDate.getDate() + days);
console.log(new Date(nextYearDay));
