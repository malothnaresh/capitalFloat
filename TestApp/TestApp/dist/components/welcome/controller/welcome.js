testapp.controller('welcomeCtrl', function($rootScope, $scope){
	//hoisting
	$("#panel1").slideDown();
	$(".flip").on("click", function(e) {
		var target = $(this).attr("href");
		$(target).slideToggle();
		$(".panel").not(target).hide();
		e.preventDefault();
	});
});