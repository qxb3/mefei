const axios = require('axios')

const baseURL = 'https://www.miragerealms.co.uk'

async function fetchPage(title) {
  const res = await axios.get(`${baseURL}/wiki/index.php/${title}`)
  return res.data
}

module.exports = { baseURL, fetchPage }
