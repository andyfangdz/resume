var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });
var fs = require('fs');

console.log("Starting nightmare...");
nightmare
  .goto('http://localhost:9000/resume')
  .wait(1000)
  .pdf('build/resume.pdf')
  .goto('http://localhost:9000/')
  .wait(1000)
  .evaluate(function() {
    return document.getElementsByTagName('html')[0].innerHTML;
  }).then(function(html) {
    fs.writeFile('build/200.html', html);
    console.log("Nightmare built.");
    return nightmare.end();
  })
  .catch(function (error) {
    console.error('Failed:', error);
  });