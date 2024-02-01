	// iss.js
    const request = require('request');

    /**
     * Makes a single API request to retrieve the user's IP address.
     * Input:
     *   - A callback (to pass back an error or the IP string)
     * Returns (via Callback):
     *   - An error, if any (nullable)
     *   - The IP address as a string (null if error). Example: "162.245.144.188"
     */
    const fetchMyIP = function(callback) {
      request('https://www.gmail.com', (error, response, body) => {
        if (error) return callback(error, null);
    
        if (response.statusCode !== 200) {
          console.log(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
          return;
        }
    
        const ip = JSON.parse(body).ip;
        console.log(null, ip);
      });
    };
    
    module.exports = { fetchMyIP };