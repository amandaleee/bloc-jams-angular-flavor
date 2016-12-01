# The purpose of this sheet is for me to keep dev notes, sources, links to helpful SO discussions, etc, for studying purposes only. 

#### Checkpoint 5: 
[https://docs.angularjs.org/guide/scope](Scope) is an object that refers to the application model - can watch/manipulate data and propagate events. 

[https://en.wikipedia.org/wiki/Business_logic](Business logic) handles the way data is transformed, calculated, and routed to people/software; it encompasses process, procedure, user flow, states, etc. We deal with business logic in the __controllers__.

Use controllers for: 
- initializing the state of the $scope object
- adding behavior to the $scope object
[Don't manipulate the DOM with a controller; use a directive for that. Coming back to that in a future checkpoint.]

.controller() method takes 2 params: .controller('ControllerName', ControllerCallback); 
--> Callback executes when the controller is initialized. 

In the controller - there's a .module() method similar to module method in app.js, but doesn't need a second argument [which in app.js is the array of dependencies - this has already been set]. 

[https://docs.angularjs.org/guide/expression#angular-expressions-vs-javascript-expressions](Angular Expressions ingo )

__QUESTIONS__
-  .controller('MyCtrl', [$scope, dep1, dep2, MyCtrl]); - this controller has some dependencies. why are they in the controller and not in app.js? 



#### Checkpoint 4: 

Imperative vs. Declarative: Imperative [eg jquery] tells the markup what to do, but it's not obvious from looking at the markup what any element might do; declarative [eg angular] includes all the functional behavior as part of the markup. 
ng-click ~= .click() in jquery
ng-show ~= .show()



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