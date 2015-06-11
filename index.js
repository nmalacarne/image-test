var path  = require('path');
var fs    = require('fs');
var im    = require('gm').subClass({imageMagick: true});

var readPath  = path.join(__dirname, 'old');
var writePath = path.join(__dirname, 'new');

fs.readdir(readPath, function(err, files) {
  if (!err) {
    files.forEach(function(entry) {
      im(path.join(readPath, entry))
      .resize(400, 300)
      .write(path.join(writePath, entry), function(err) {
        if (!err) console.log(entry + ' resized.');
      });
    });
  }
});
