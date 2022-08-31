const axios = require('axios');

async function makeRequest(configParam) {
    const config = `http://localhost:3000/${configParam}`
    let res = await axios(config)
    console.log(res.status);  
  return res    
}

module.exports = {
  makeRequest
}