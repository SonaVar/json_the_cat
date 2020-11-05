const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
  } else {
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log(`Sorry the breed "${breedName}" does not exist. Try again.`);
    }
  }
});