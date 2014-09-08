#Thermostat

##Table of Contents

* [Screenshot](#screenshot)
* [General Description](#general-description)
* [Functional Description](#functional-description)
* [See it Live on Github](#see-it-live-on-github)
* [How to Run the App Locally](#how-to-run-the-app-locally)
* [Browsers](#browsers)
* [Testing](#testing)
* [Credit](#credit)
* [License](#license)


##Screenshot

<table>
	<tr>
		<td align="center">
			<a href="https://raw.githubusercontent.com/nadavmatalon/thermostat/master/public/images/thermostat.png">
				<img src="https://raw.githubusercontent.com/nadavmatalon/thermostat/master/public/images/thermostat.png">
			</a>
		</td>
	</tr>
</table>


##General Description

This app implements a simple thermostat interface simulator, coupled with a
local temperature indicator for London, UK.

It was created as an exercise in buiding a simple JavaScript web application, 
using the Sinatra framework, jQuery and JSON functionality and following TDD methodology 
(testing was done with [Jasmine](http://jasmine.github.io/2.0/introduction.html)). 

__Update__ (4.9.2014): the local temperature indicator window now changes it's background 
color according to the current temperature on a scale that ranges between blue for cold weather
to red for a hot one.


##Functional Description

* The thermostat default is 20 degrees
* The user can increase the temp by clicking the '+' button
* The user can decrease the temp by clicking the '-' button
* The user can reset the temperature back to default by clicking the 'Reset' button
* The minimum temperature is 10 degrees
* The 'Power Saving Mode' is the default
* If the 'Power Saving Mode' is turned on, the maximum temperature is 25 degrees
* If the 'Power Saving Mode' is turned off, the maximum temperature is 35 degrees
* If the 'Power Saving Mode' is turned on while the thermostat's is set
  above 25 degrees, the temperature is automatically set back down to 25 degrees
* The thermostat changes the color of display based on the selected temperature:
    * Green: under 18 degrees
    * Orange: between 18 and 24 degrees
    * Red: above 24 degrees


##See it Live on Github
			
A live version of the app can be found at:

[Thermostat on Github.io](http://nadavmatalon.github.io/thermostat/)

(Please see notes about browser compatibility below).


##How to Run the App Locally

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


##Credit

The local weather window pulls the relevant termperature data 
from [OpenWeatherMap's API](http://openweathermap.org/).


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>

