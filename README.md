A simple node.js banner display for the console.


Either require it as a variable and use the .set function:

var banner = require('simple-banner');

banner.set("My App Name");


Or do it all in once:

require('simple-banner').set("My App Name");


Should you wish to have the application name utilize the rainbow print function,
simply add a true boolean in the function call:


require('simple-banner').set("My App Name", 1);