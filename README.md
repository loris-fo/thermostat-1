#Thermostat

##Table of Contents

* [General Description](#general-description)
* [Functional Description](#functional-description)
* [How to Run](#how-to-run)
* [Browsers](#browsers)
* [Testing](#testing)
* [License](#license)


##General Description

This app implements a simple thermostat interface simulator.

It was created as an exercise in buiding a simple JavaScript web application, 
using the Sinatra framework, jQuery functionality and following TDD methodology 
(testing was done with [Jasmine](http://jasmine.github.io/2.0/introduction.html)). 


##Functional Description

* The thermostat default is 20 degrees
* The user can increase the temp by clicking the '+' button
* The user can decrease the temp by clicking the '-' button
* The user can reset the temperature back to default by clicking the 'Reset' button
* The minimum temperature is 10 degrees
* The 'Power Saving Mode' is the default
* If 'Power Saving Mode' is checked, the maximum temperature is 25 degrees
* If 'Power Saving Mode' is unchecked, the maximum temperature is 32 degrees
* The thermostat changes the color of display based on the selected temperature:
    * Green: under 18 degrees
    * Yellow: between 18 and 24 degrees
    * Red: above 24 degrees


##How to Run

To run the app, clone the repo to a locall folder and in the terminal run:

```bash
$  cd thermostat
$  shotgun
```

Then open the browser of your choice and go to:
```
http://localhost:9393/
```

##Browsers

This app has been tested with and supports the following browsers (though
it should hopefully look decent in other browsers as well):

* __Google Chrome__ (36.0)
* __Apple Safari__ (7.0.5)
* __Mozilla Firefox__ (31.0)


##Testing

Tests were written with [Jasmine (2.0.0)](http://jasmine.github.io/2.0/introduction.html).

To run the tests, go to the root folder using 'Finder' and double-click the 
`SpecRunner.html` file.


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>

