#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');

program
  .version('0.0.1')
  .option('-f --file <file>', 'Path to a webpack stats file with a "time" property.', './stats.json')
  .option('-t --threshhold <threshhold>', 'Threshhold for the build time in milliseconds. Defaults to 30000.', 30000)
  .parse(process.argv);

var stats = JSON.parse(fs.readFileSync(program.file));
var time = parseInt(stats.time);
var threshhold = parseInt(program.threshhold);

require('../src/')(time, threshhold);