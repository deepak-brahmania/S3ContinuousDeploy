const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher/chrome-launcher');

function launchChromeAndRunLighthouse(url, flags, config = null){
	return chromeLauncher.launch().then(chrome=>{
		flags.port = chrome.port;
		return lighthouse(url, flags, config).then(results => chrome.kill().then(() => results))
		;
	});
}

const flags = {output : 'html'};

launchChromeAndRunLighthouse('http://www.google.com', flags).then(results => {
	console.log(results);
})
