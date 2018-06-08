var skripto = require('./skripto');
var fs = require('fs');


var content;
// First I want to read the file
fs.readFile('./examples/sample-v2.skripto', function read(err, data) {
    if (err) {
        throw err;
    }
    var scobj = new skripto.Skripto();
    scobj.loadData(data);

    /* Test */

    var l = scobj.getScript()
    console.warn(l);


    var dat = scobj.getStringData();
    fs.writeFile("./examples/createdFile.Skripto", dat, function(err) {
      if(err) {
        return console.log(err);
      }


      console.log("The file was saved!");
});
});



console.warn('hi');
