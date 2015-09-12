
var baseDate = new Date(2015, 10, 26);
var date = new Date();
var year = date.getFullYear();

/*
var baseDate = new Date(2023, 10, 23);
var date = new Date();
*/
var year = date.getFullYear();
var tomorrow = new Date(baseDate);
/*
var leap = function (year) {
  var date = new Date(year, 1, 29);  
  return date.getMonth() === 1 ? true : false;
}
var days = leap(year) ? 364 : 364;
*/
var nextYearDay = tomorrow.setDate(baseDate.getDate() - 364);


var getDate = {
  getYear: function (year) {
  	this.baseDate = new Date(2015, 10, 26);
  	this.date = new Date();
    this.year = this.baseDate.getFullYear();
    this.days = this.getNumberOfDays(year);
    this.newDate = new Date(baseDate);

    this.intendDate = this.newDate.setDate(baseDate.getDate() + this.days);

    return new Date(this.intendDate);


  },
  getNumberOfDays: function (year) {
  	if (parseInt(year) > parseInt(this.year)) {
  		//selected year is later than current year
  		var mult = parseInt(year) - parseInt(this.year);
  		return mult * 364;
  	} else {
  		//selected year is earlier than current year
  		var mult = parseInt(this.year) - parseInt(year);
  		var days = mult * 364;
  		return -days;
  	}
  }
};

var self = this;

$("select").on("change", function () {
  var date = self.getDate.getYear(this.value);
  $(".output").html(date);
});
