const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || body === '[]') {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };