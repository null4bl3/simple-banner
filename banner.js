
var dt = new Date();
var hour = dt.getHours();
var minute = dt.getMinutes();
var second = dt.getSeconds();
var col = require("colors");
var center = function(_string){
  return process.stdout.columns / 2 - _string.length / 2;
};

var timer = function(){
  var d = new Date();
  var curr_hour = d.getHours();
  var curr_min = d.getMinutes();
  var curr_sec = d.getSeconds();
  if (curr_sec < 10) {
      curr_sec = "0" + curr_sec;
  }
  if (curr_min < 10) {
      curr_min = "0" + curr_min;
  }
  if (curr_hour < 10) {
      curr_hour = "0" + curr_hour;
  }
  return "Time Updated: " + curr_hour + ":" + curr_min + ":" + curr_sec;
};

exports.set = function(app_name, rainbow){
  console.log();
  for (var i = 0; i < process.stdout.columns; i++) {
    process.stdout.write(col.cyan("="));
  }
  console.log();
  for (var d = 0; d < center(app_name); d++) {
    process.stdout.write(" ");
  }
  if (rainbow) {
    process.stdout.write(col.green(" - ") + col.rainbow(app_name) + col.green(" - ") + "\n");
  } else {
    process.stdout.write(col.green(" - ") + app_name + col.green(" - ") + "\n");
  }

  for (var k = 0; k < process.stdout.columns; k++) {
    process.stdout.write(col.blue("-"));
  }
  for (var f = 0; f < center("Running file: " + process.argv[1] + ""); f++) {
    process.stdout.write(" ");
  }
  process.stdout.write("Running file: " + col.yellow(process.argv[1]) + "\n ");
  console.log();
  for (var p = 0; p < center(timer()); p++) {
    process.stdout.write(" ");
  }
  process.stdout.write(col.blue(" » ") + timer() + col.blue(" « "));
  console.log();
  for (var v = 0; v < process.stdout.columns; v++) {
    process.stdout.write(col.cyan("="));
  }
  console.log("\n \n");
};
