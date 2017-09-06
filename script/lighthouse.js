const Lighthouse = require('lighthouse');
const ChromeLauncher = require('lighthouse/lighthouse-cli/chrome-launcher.js').ChromeLauncher;
const Printer = require('lighthouse/lighthouse-cli/printer');

function launchChromeAndRunLighthouse(url, flags, config) {
  const launcher = new ChromeLauncher({port: 9222, autoSelectChrome: true});

  return launcher.isDebuggerReady()
    .catch(() => {
      if (flags.skipAutolaunch) {
        return;
      }
      return launcher.run(); // Launch Chrome.
    })
    .then(() => Lighthouse(url, flags, config)) // Run Lighthouse.
    .then(results => launcher.kill().then(() => results)) // Kill Chrome and return results.
    .catch(err => {
      // Kill Chrome if there is an error.
      return launcher.kill().then(() => {
        throw err;
      }, console.error);
    });
}
// Use an existing config or create a custom one.
const config = require("lighthouse/lighthouse-core/config/perf.json");
const url = process.env.URL;
const flags = {
  output: 'html',
  chromeFlags: ['--headless'],
  outputPath: '/script/report.html'
	}
launchChromeAndRunLighthouse(url, flags, config).then(lighthouseResults => {
  lighthouseResults.artifacts = undefined; // You can save the artifacts separately if so desired
  return Printer.write(lighthouseResults, flags.output);
}).catch(err => console.error(err));