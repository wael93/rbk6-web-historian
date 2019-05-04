var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
console.log('wael5');
var arr = [];
var str = '';
exports.readListOfUrls = function(callback) {
  
  fs.readFile(exports.paths.list, (err, data )=>{
   
    if (err) { throw err; }
    // console.log('23', data.toString());
    str = data.toString();
    arr = str.split('\n');
    // console.log('22', arr);
    callback(arr);
  });

};

exports.isUrlInList = function(url, callback) {
  fs.readFile(exports.paths.list, (err, data)=>{
   
    if (err) { throw err; }
    str = data.toString();
    arr = str.split('\n');
  
    var urll = arr.indexOf(url) !== -1;
    
    callback(urll);
  });

  

};

exports.addUrlToList = function(url, callback) {
  fs.writeFile(exports.paths.list, url, (err) => {
    
    if (err) { throw err; }
   
    
  });
  callback();

};

exports.isUrlArchived = function(url, callback) {
  fs.readdir(exports.paths.archivedSites, (err, files)=>{
   
    
    if (err) { throw err; }
    
    var urll = files.includes(url);
    callback(urll);
  } );
  
  
 
};

exports.downloadUrls = function(urls) {
  // for (var i = 0; i < urls.length; i++) {
  //   console.log('1', urls);
  //   console.log('2', urls[i]);
  //   9
  //     console.log('3', urls[i]);
  //     fs.appendFile(exports.paths.list, urls[i], (err)=>{
  //       if (err) { throw err; }
  //       console.log('4', urls[i]);
  //       console.log('5', urls);
  //     });
      
  //   }
  // }
   
  var path = fs.createWriteStream(exports.paths.archivedSites);
  var newStrem = request.get({
    url = urls[i];
  })
  pipe(path)
  
};
