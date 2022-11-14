function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;

    var date = new Date();
    var d2 = date.getDate();
    console.log(d2)
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";

        var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
    document.getElementById("days").innerHTML = days;
                
          document.getElementById("hrs").innerHTML = hours;
                
                document.getElementById("mins").innerHTML = minutes;
                
                document.getElementById("secs").innerHTML = seconds;
}, 1000);


var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
    document.getElementById("days").innerHTML = days;
                
          document.getElementById("hrs").innerHTML = hours;
                
                document.getElementById("mins").innerHTML = minutes;
                
                document.getElementById("secs").innerHTML = seconds;
}, 1000);
}