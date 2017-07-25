var prettycli = require('prettycli');

module.exports = function(time, threshhold) {
  if (time > threshhold) {
    prettycli.error('🐢  Build time, ' + parseFloat(time / 1000).toFixed(2) + 's exceeds threshhold, ' + parseFloat(threshhold / 1000).toFixed(2) + 's.', { label: 'ERROR' });
  } else {
    prettycli.info('Success', '🐇  Build took ' + parseFloat(time / 1000).toFixed(2) + 's.');
  }
}

