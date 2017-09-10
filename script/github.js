var config = require('../config/config.js');
var GITHUB = require('github');

var gitHub = new GITHUB({
    debug: true,
    Promise: require('bluebird'),
    timeout: 5000,
    host: 'api.github.com',
    protocol: "https",
});
// getting comments on issues repo

// gitHub.issues.getCommentsForRepo({
//     owner: 'deepak-brahmania',
//     repo: 'S3ContinuousDeploy'
// }, function(err, res){
//     if(err)
//         return;
//     var object = JSON.stringify(res.data);
//     console.log('stareing',object, typeof(object));
    
// })

// gitHub.repos.get({
//    owner: 'deepak-brahmania',
//    repo: 'S3ContinuousDeploy',
// }, function(err, res){
//     console.log('string ', JSON.stringify(res));
// });

//getting PR comments
// gitHub.pullRequests.getComments({
//     owner: 'deepak-brahmania',
//     repo: 'S3ContinuousDeploy',
//     number: 11,
// },function(err, res) {
//     if(err)
//         return;
//     res.data.map((element, index)=> {
//         console.log(element.body);
//     })
// });
console.log(config.getToken());
gitHub.authenticate({
    type:'token',
    token: config.getToken().TOKEN,
});
gitHub.issues.createComment({
        owner: 'deepak-brahmania',
        repo: 'S3ContinuousDeploy',
        number: 11,
        body: 'Successfully Passed the Metrics'
    },function(error, result){
        if(error)
            return error;
        else
            console.log(result);
    }
);
