const fetch = require('node-fetch'); // Used to make HTTP requests

module.exports = async (req, res) => {
  const API_KEY = '09aa86774cbc5e94345f3c1d6dd5790b'; // Replace with your FRED API key
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=APU0000708111&realtime_start=1776-07-04&realtime_end=9999-12-31&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      res.status(200).json(data); // Send data as JSON to the client
    } else {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};