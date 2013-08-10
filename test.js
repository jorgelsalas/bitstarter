#!/usr/bin/env node

var sys = require('util');
var rest = require('restler');

rest.get('http://evening-mesa-8058.herokuapp.com').on('complete', function(result) {
  if (result instanceof Error) {
    sys.puts('Error: ' + result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    return result;
  }
});
