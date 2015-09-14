function getDay(year) {
  var day_of_week, first;
  if (year == null) {
    year = (new Date).getFullYear();
  }
  first = new Date(year, 10, 1);
  day_of_week = first.getDay();
  return 22 + (11 - day_of_week) % 7;
}

var self = this;

$("select").on("change", function () {
  var dayOfWeek = getDay(this.value);
  var date = new Date(this.value, 10, dayOfWeek)
  $(".output").html(date);
});
1