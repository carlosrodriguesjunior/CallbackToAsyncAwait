//Non-Blocking
const fs = require('fs');
const someMatch = 1+1;
 
fs.readFile('big-file.txt', 'utf-8', function (err, content) {
 if (err) {
 return console.log(err)
 }
 console.log(content)
})
 
const text = `The response is ${ someMatch }`;
console.log(text);