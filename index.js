// Create an array of time blocks
var timeblocks = [9, 10, 11, 12, 13, 14, 15, 16,17]
var currentHour = moment().hour()
console.log(currentHour)
var date = $('#currentDay')
var past = $('.past')
var future = $('.future')
var present = $('.present')

//Using moment js decide weather or not the time in the array is the past, present or future
function pastPresentFuture(hour) {
$(".container .time-block").each(function(){
  var textarea = $(this).children()
  console.log(textarea[1]);
  var hour = $(this).attr("data-time")
  if (hour == currentHour){
    $(textarea[1]).addclass("present")
  }
  else if (hour < currentHour){
    $(textarea[1]).addclass("past")
  }
  else {
    $(textarea[1]).addclass("future")
  }
})

    // past, present, future
    return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
}
$(document).ready(function() {
  date.text(moment().format("dddd MMMM, Do, YYYY"))
  pastPresentFuture();
  var blocks = $('.time-block');
  }
,
function saveEvent(event) {

  // Save to local stoarage the event at a certain time.
})

var blocks = $('#timeblocks');
for (var i = 0; i < timeblocks.length; i++) {
  blocks.append(`
  <textarea class="${pastPresentFuture(timeblocks[i])}" ></textarea>
  )
