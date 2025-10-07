const axios = require('axios');
const fs = require('fs');
const KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.PLACE_ID;
if(!KEY || !PLACE_ID){ console.error('Set GOOGLE_API_KEY and PLACE_ID'); process.exit(1); }
(async function(){
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${KEY}`;
  const res = await axios.get(url);
  const result = res.data.result;
  const out = { name: result.name, rating: result.rating, total: result.user_ratings_total, reviews: (result.reviews||[]).map(r=>({author_name:r.author_name,rating:r.rating,text:r.text,time:r.relative_time_description})) };
  fs.writeFileSync('data/reviews.json', JSON.stringify(out,null,2));
  console.log('Wrote data/reviews.json');
})();
