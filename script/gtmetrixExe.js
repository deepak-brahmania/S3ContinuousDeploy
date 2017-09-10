
let gtmetrix = require('gtmetrix')({
  email: 'daredreamer1990@gmail.com',
  apikey: 'fda3b677b9fdad5601432a780723d598',
});
let config = {
  url: process.env.URL,
  browser: 1,
  location: 1,
};
/**
 * @summary function to test the gtmetrix api
 * @param {Integer} yslowScore
 * @param {Integer} pageSpeedScore
 */
function runGtmetrix(yslowScore, pageSpeedScore) {
  // gtmetrix.test.create(config, function(err, data) {
  //   if(data) {
  //    return gtmetrix.test.get(data.test_id, 15000, function(err, data) {
  //       if(data.results.yslow_score >= yslowScore && data.results.pagespeed_score >= pageSpeedScore) {
  //         console.log(data.results, 0); //successful
  //       } else{
  //         console.log(data.results, 1); // failed

  //       }
  //     });
  //   } else{
  //     console.log(yslowScore, pageSpeedScore,config.url);
  //       console.log(err ,1); // no data
  //   }
  // });
  console.log(yslowScore, pageSpeedScore);
}
runGtmetrix(process.env.yslow_score, process.env.pagespeed_score);
console.log(process.env);
