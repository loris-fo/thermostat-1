#Thermostat

[![Code Climate](https://codeclimate.com/github/nadavmatalon/thermostat/badges/gpa.svg)](https://codeclimate.com/github/nadavmatalon/thermostat)

##Table of Contents

* [Screenshot](#screenshot)
* [General Description](#general-description)
* [Functional Description](#functional-description)
* [See it Live on Github](#see-it-live-on-github)
* [How to Install the App Locally](#how-to-install-the-app-locally)
* [Browsers](#browsers)
* [Testing](#testing)
* [Credit](#credit)
* [License](#license)


##Screenshot

<table>
	<tr>
		<td align="center" width='600px'>
			<a href="https://raw.githubusercontent.com/nadavmatalon/thermostat/master/public/images/thermostat.png">
				<img src="https://raw.githubusercontent.com/nadavmatalon/thermostat/master/public/images/thermostat.png">
			</a>
		</td>
	</tr>
</table>


##General Description

This [JavaScript](http://en.wikipedia.org/wiki/JavaScript) app implements 
a thermostat interface simulator, coupled with a
local temperature widget for London, UK.

The app was created as an exercise in buiding a 
[JavaScript](http://en.wikipedia.org/wiki/JavaScript) application, 
using the [Sinatra](http://www.sinatrarb.com/) framework, 
[jQuery](http://jquery.com) and [JSON](http://www.json.org/) functionality 
by following [TDD](http://en.wikipedia.org/wiki/Test-driven_development) methodology 
(testing was done with [Jasmine](http://jasmine.github.io/2.0/introduction.html)). 

__Update__ (4.9.2014): the local temperature indicator window now changes it's background 
color according to the current temperature on a scale that ranges between blue for cold weather
to red for a hot one.

__Update__ (10.11.2014): refactored the entire code. Changes included splitting the
JavaScript code into distinct files, refactoring the tests and updating the 
weather widget UI.


##Functional Description

__Thermostat__

* The thermostat default is 20°
* The user can increase the temp by clicking the '+' button
* The user can decrease the temp by clicking the '-' button
* clicking the 'Reset' button resets the temperature to 20° and turns 
  on the 'power saving mode'
* The minimum temperature is 10°
* The 'Power Saving Mode' is on by default
* If the 'Power Saving Mode' is turned on, the maximum temperature is 25°
* If the 'Power Saving Mode' is turned off, the maximum temperature is 35°
* If the thermostat's temp is set above 25° and the 'Power Saving Mode' is 
  turned on, the temperature is automatically set back down to 25°
* The thermostat changes the color of display based on the selected temperature:
    * Green: under 18°
    * Orange: between 18° - 24° 
    * Red: above 24°

__Weather Widget__

* The widget shows the current temperature at London, UK
* Widget can be opened/closed by clicking on the small arrow at the 
  bottom of the Thermostat interface
* Background color changes according to the temperature:
    * Green: under 18°
    * Orange: between 18° - 24° 
	* Red: above 24°
	* Grey: No reading


##See it Live on Github
			
A live version of the app can be found at:

[Thermostat on Github.io](http://nadavmatalon.github.io/thermostat/)

(Please see notes about browser compatibility below).


##How to Install the App Locally

To run the app, clone the repo locally and in the terminal run:

```bash
$> cd thermostat
$> bundle install
$> shotgun
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

To run the tests, clone the repo locally and run:

```bash
$> cd thermostat
$> open ./spec/SpecRunner.html
```


##Credit

The local weather window pulls the relevant termperature data 
from [OpenWeatherMap's API](http://openweathermap.org/).


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>

