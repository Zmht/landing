// Replace with your API URL
//API KEY: 09aa86774cbc5e94345f3c1d6dd5790b
const API_KEY = '09aa86774cbc5e94345f3c1d6dd5790b';
const url = `http://cors-anywhere.herokuapp.com/corsdemo/https://api.stlouisfed.org/fred/series/observations?series_id=APU0000708111&realtime_start=1776-07-04&realtime_end=9999-12-31&api_key=${API_KEY}`
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Log the entire response to inspect it

        // Ensure 'seriess' exists and contains observations
        if (data && data.seriess && data.seriess[0].observations) {
            const observations = data.seriess[0].observations;
            let html = '<table border="1"><tr><th>Date</th><th>Price (USD)</th></tr>';

            // Loop through the observations array and display each entry
            observations.forEach(item => {
                html += `<tr><td>${item.date}</td><td>${item.value}</td></tr>`;
            });

            html += '</table>';
            document.getElementById('eggPrices').innerHTML = html;
        } else {
            // If no observations are found, display an error message
            document.getElementById('eggPrices').innerHTML = `<p>No egg price data available.</p>`;
        }
    })
    .catch(error => {
        console.error(error);
        document.getElementById('eggPrices').innerHTML = `<p>Error fetching data: ${error}</p>`;
    });