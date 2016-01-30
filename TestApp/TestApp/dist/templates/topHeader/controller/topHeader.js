testapp.controller('topHeaderCtrl', function($scope, $http){
	$(document).ready(function(){
		$(".glyphicon.glyphicon-th-list").click(function(){
			$("#showMobileNav").slideToggle();
		});
	});
});