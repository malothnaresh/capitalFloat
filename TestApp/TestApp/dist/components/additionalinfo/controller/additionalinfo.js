testapp.controller('additionalinfoCtrl', function($rootScope, $scope, $window){
	//hoisting
	$("#addPanel1").slideDown();
	
	$scope.printFunction = function(){
		$window.print();
	}
	$("#addPanel1").slideDown();
	$(".addFlip").on("click", function(e) {
		var target = $(this).attr("href");
		$(target).slideToggle();
		$(".addPanel").not(target).hide();
		e.preventDefault();
	});
});