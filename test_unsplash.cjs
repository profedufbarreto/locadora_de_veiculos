// using node to fetch unsplash search page
const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=1`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const js = JSON.parse(data);
          let resultId = null;
          if (js && js.results && js.results.length > 0) {
            resultId = js.results[0].id;
          }
          resolve(resultId);
        } catch(e) {
          resolve(null);
        }
      });
    });
  });
}

(async () => {
  const cars = [
    'Honda Civic', 'Jeep Wrangler', 'Tesla Model S', 'Porsche 911', 'Audi RS6 Avant', 'Mini Cooper S', 'Ford Mustang Mach-E', 'Land Rover Defender',
    'Sport Bike', 'Ducati Panigale', 'BMW R1250 GS', 'Yamaha MT-07', 'KTM 390 Duke',
    'Electric Motorcycle', 'Super Soco', 'NIU Scooter',
    'Segway Ninebot Max', 'Unagi Model One',
    'Mercedes Sprinter Camper', 'VW California', 'Airstream Motorhome', 'Ford Transit Camper'
  ];
  for(const c of cars) {
    let res = await searchUnsplash(c);
    console.log(`"${c}": "${res}",`);
  }
})();
