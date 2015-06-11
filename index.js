var path  = require('path');
var fs    = require('fs');
var gm    = require('gm').subClass({imageMagick: true});

var width   = 400;
var height  = 300;

var readPath  = path.join(__dirname, 'old');
var writePath = path.join(__dirname, 'new');

fs.readdir(readPath, function(err, files) {
  if (!err) {
    files.forEach(function(file) {
      gm(path.join(readPath, file))
      .resize(width, height)
      .write(path.join(writePath, file), function(err) {
        if (!err) console.log('%s resized.', file);
      });
    });
  }
});
