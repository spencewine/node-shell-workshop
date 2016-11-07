
var fs = require('fs')

module.exports = {

pwd:
function (file){
    var output = ''
    output = process.argv[1]
    process.stdout.write('You typed: ' + output);
    process.stdout.write('\nprompt > '); 

},

date:
function (file){
    var output = ''
    output = new Date();
    process.stdout.write('You typed: ' + output);
    process.stdout.write('\nprompt > '); 
},

ls:
function(file){
    return  fs.readdir('.',function(err,files){
        if(err) throw err;
        files.forEach(function(file){
            process.stdout.write(file.toString()+ '\n');
        })
    process.stdout.write("prompt > ")
    }) 
},

echo:
function(file){

   var argString = Array.prototype.join.call(arguments, ' ')
    
    process.stdout.write('You typed: ' + argString);
    process.stdout.write('\nprompt > '); 
    
    
},
cat:
function(file){
    var pathArr = process.argv[1].split('/')
    
    pathArr.pop();
    pathArr.push(file)
     var pathStr =pathArr.join('/')
    fs.readFile(pathStr, function(err,fileContent){
        if(err) throw err;
        process.stdout.write('You typed: ' + fileContent);
        process.stdout.write('\nprompt > '); 
    })
},

head: 
function(file){
     var pathArr = process.argv[1].split('/')
    
    pathArr.pop();
    pathArr.push(file)
     var pathStr =pathArr.join('/')
    fs.readFile(pathStr, function(err,fileContent){
        if(err) throw err;
        var lineArr = String(fileContent).split('\n')
        var fileContStr = lineArr.slice(0,10).join('\n');
        process.stdout.write('You typed: ' + fileContStr);
        process.stdout.write('\nprompt > '); 
    })
},

tail:
function(file){
     var pathArr = process.argv[1].split('/')
    
    pathArr.pop();
    pathArr.push(file)
     var pathStr =pathArr.join('/')
    fs.readFile(pathStr, function(err,fileContent){
        if(err) throw err;
        var lineArr = String(fileContent).split('\n')
        var fileContStr = lineArr.slice(lineArr.length-10).join('\n');
        process.stdout.write('You typed: ' + fileContStr);
        process.stdout.write('\nprompt > '); 
    })
}



}