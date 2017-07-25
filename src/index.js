var prettycli = require('prettycli');

module.exports = function(time, threshold) {
  if (time > threshold) {
    prettycli.error('🐢  Build time, ' + parseInt(time / 1000).toFixed(2) + 's exceeds threshold, ' + parseInt(threshold / 1000).toFixed(2) + 's.', { label: 'ERROR' });
  } else {
    prettycli.info('Success', '🐇  Build took ' + parseInt(time / 1000).toFixed(2) + 's.');
  }
}

