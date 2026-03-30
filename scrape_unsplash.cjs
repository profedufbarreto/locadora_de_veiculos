const https = require('https');

function getUnsplashUrl(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/);
        if (match) {
          resolve(`https://${match[0]}?auto=format&fit=crop&q=80&w=800`);
        } else {
          resolve('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800'); // fallback
        }
      });
    });
  });
}

(async () => {
  const cars = [
    'honda civic', 'jeep wrangler', 'tesla model s', 'porsche 911', 'audi rs6', 'mini cooper', 'ford mustang', 'land rover defender',
    'sport bike', 'ducati panigale', 'bmw gs 1250', 'yamaha mt', 'ktm duke',
    'electric motorcycle', 'super soco', 'niu scooter',
    'electric scooter', 'segway ninebot', 'unagi scooter',
    'mercedes sprinter camper', 'vw california camper', 'airstream motorhome', 'ford transit camper'
  ];
  let result = {};
  for(const c of cars) {
    let res = await getUnsplashUrl(c.replace(/ /g, '-'));
    console.log(`"${c}": "${res}",`);
  }
})();
