(function() {

	function LandingCtrl() {
    //heroTitle is a property on the LandingCtrl scope object
    this.heroTitle = "Turn the Music Up!";
	}

	angular
		.module('blocJams')
		.controller('LandingCtrl', LandingCtrl);

})();