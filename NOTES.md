# The purpose of this sheet is for me to keep dev notes, sources, links to helpful SO discussions, etc, for studying purposes only. 

#### Checkpoint 4: 




#### Checkpoint 3 (https://github.com/amandaleee/bloc-jams-angular-flavor/pull/3)

function config() takes providers as arguments. 
 stateprovider  = manages state behavior
 locationprovider = how application handles urls - part of ng core 

-------

$locationProvider disables hashbang mode; so the url will be url.com/pagename instead of url.com/#!/pagename. 

-------

//$stateprovider calls the state method w two arguments - stateName and stateConfig 
 like this - $stateProvider.state(stateName, stateConfig)
 

-------

In app.js, don't forget the () after the function declaration for the closure. [http://stackoverflow.com/a/28306787 - i was getting errors without the ()]

------- 
ui-sref="landing" links to home bc that's what's set in app.js.