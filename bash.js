

var exports = require('./commands.js')


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

// var cmdArr = data.split(" ")

  var cmdArr = data.toString().trim().split(" "); // remove the newline
  var cmd = cmdArr[0];
  var args = cmdArr.slice(1)

  
 exports[cmd](...args)
      
  
  


});




// console.log(process.argv)