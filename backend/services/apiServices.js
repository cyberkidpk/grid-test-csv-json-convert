const axios = require('axios');

async function makeRequest(configParam) {
  const {fileToSeek, portToSeek, urlToSeek, secure} = configParam
  const proto = secure == 'yes' ? 'https':'http';
  const finalPort = portToSeek ? `:${portToSeek}`: '';
    const config = `${proto}://${urlToSeek}${finalPort}/${fileToSeek}`;
    console.log(config)
    let res = await axios(config) 
  return res    
}

module.exports = {
  makeRequest
}