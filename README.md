A simple node.js banner display for the console.


The module contains a single function named set.
set("app name", "additional info", rainbow boolean)

Either require the module as a variable and use the .set function:

var banner = require('simple-banner');
banner.set("The Amazing Application", 0, 0);

("The Amazing Application" being the name of your application)

Or you do it all in one line:

require('simple-banner').set("The Amazing Application", 0, 0);

The module takes two optional parameters besides the application name.
The first is any additional information you wish to display in the banner.
The second is a boolean value that decides if the application title is going to be displayed using the rainbow beauty or not.

![no rainbow option](https://github.com/null4bl3/simple-banner/raw/master/Screenshot2.png)


Should you wish to have the application name utilize the rainbow print function,
simply add a true boolean as the last parameter in the function call:

require('simple-banner').set("The Amazing Application", 0, 1);

![rainbow option](https://github.com/null4bl3/simple-banner/raw/master/Screenshot1.png)
