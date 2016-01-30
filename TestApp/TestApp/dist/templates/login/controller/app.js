'use strict';
/* App Module */
var testapp = angular.module('testapp', ['ngRoute', "ui.router"]);

testapp.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.
	state('home', {
		url : '/home',
		templateUrl : 'components/welcome/template/welcome.html',
		controller : 'welcomeCtrl'
	}).state('additionalinfo', {
		url : '/additionalinfo',
		templateUrl : 'components/additionalinfo/template/additionalinfo.html',
		controller : 'additionalinfoCtrl'
	});
}]);

testapp.controller('loginCtrl', function($rootScope, $scope, $window, $http, restService){
	$scope.appsShow = false;
	$scope.OtpShow = false;
	$scope.showLoginErr = false;
	$scope.showOTPErr = false;
	$window.location.href = '#/';
	//$scope.userName = "Siddarudha Ugnikeri";
	//$scope.email = "noemail";
	var getServiceData = function() {
		var promise = restService.getData('json/profile.json');
		promise.then(function (response){
			$scope.data = response.data;
			//JSON dividing part
			
			//user info section
			$rootScope.PersonalInfo = $scope.data.user_info.PersonalInfo;
			$rootScope.WorkExperience = $scope.data.user_info.WorkExperience;
			$rootScope.LicenseIds = $scope.data.user_info.LicenseIds;
			
			//addtional details info
			$rootScope.SavingsInstruments = $scope.data.additional_details.SavingsInstruments;
			$rootScope.PrePaidBalance = $scope.data.additional_details.PrePaidBalance;
			$rootScope.LoanRecords = $scope.data.additional_details.LoanRecords;
			$rootScope.BankStatements = $scope.data.additional_details.BankStatements;
			$rootScope.WaterBill = $scope.data.additional_details.WaterBill;
			$rootScope.Remittances =$scope.data.additional_details.Remittances;
			$rootScope.Insurance = $scope.data.additional_details.Insurance;
			$rootScope.OtherBankComfortLetter = $scope.data.additional_details.OtherBankComfortLetter;
			$rootScope.ElectricityBill = $scope.data.additional_details.ElectricityBill;
			
			//contact info section
			//$rootScope.contactInfo = $scope.data.contact_info;
			$rootScope.permanentAddress = $scope.data.contact_info.permanentAddress;
			$rootScope.isPermanentAddressSameAsPresentAddress = $scope.data.contact_info.isPermanentAddressSameAsPresentAddress;
			$rootScope.previousAddress = $scope.data.contact_info.previousAddress;
			$rootScope.currentAddress = $scope.data.contact_info.currentAddress;
			
			//finance info section
			$rootScope.financeInfo = $scope.data.finance_info;
			
			//sign up info
			$rootScope.signup = $scope.data.signup;
		},
		function(response){
			console.log("There seems some problem with service.");
		});
    };
	getServiceData();
	
	$scope.checkLogin = function(uname, pwd){
			if(uname == $scope.data.signup.Name)
				if(pwd == $scope.data.signup.Email)
					return true;
		return false;
	}
	
	$scope.submitLogin = function(){
		var validLogin = $scope.checkLogin($scope.userName, $scope.email);
		if(validLogin){
			$scope.OtpShow = true;
			$window.location.href = '#/home';
		}
		else{
			$scope.showOTPErr = false;
			$scope.showLoginErr = true;
			return false;
		}
	};
	$scope.OTPValidation = function(){
		if($scope.OTP === $scope.data.signup.OTP){
			$scope.appsShow = true;
			$window.location.href = '#/home';
		}else{
			$scope.showOTPErr = true;
			$scope.showLoginErr = false;
			$scope.OtpShow = false;
		}
		
	};
	
});