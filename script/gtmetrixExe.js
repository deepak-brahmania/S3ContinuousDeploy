
let gtmetrix = require('gtmetrix')({
  email: 'prashant.kumar@timeinc.com',
  apikey: '4d674361d60ff54fa730f96950356e17',
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
  gtmetrix.test.create(config, function(err, data) {
    if(data) {
      gtmetrix.test.get(data.test_id, 15000, function(err, data) {
        if(data.results.yslow_score >= yslowScore && data.results.pagespeed_score >= pageSpeedScore) {
          // console.log(true);
          return 1;
        } else{
          // console.log(false);
          return 0;
        }
      });
    } else{
        // console.log(false);
        return 0;
    }
  });
}
runGtmetrix(process.env.yslow_score, process.env.pagespeed_score);
