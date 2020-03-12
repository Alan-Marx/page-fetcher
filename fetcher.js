const request = require('request');
const fs = require('fs');

url_pathArray = process.argv.slice(2);

request(url_pathArray[0], (error, response, body) => {
  
  fs.open(url_pathArray[1], 'a', (err, fd) => {

    fs.write(fd, body, (err, bytesWritten) => {
      console.log(`Downloaded and saved ${bytesWritten} bytes to ${url_pathArray[1]}`);
    });

    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });  
}); 
