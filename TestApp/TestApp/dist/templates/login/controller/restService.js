testapp.service( 'restService', [ '$http','$q',restService] );

	function restService( $http, $q) {
		this.getData = function(url){
			var deffered = $q.defer();
			$http.get(url).then(function(response){
				deffered.resolve(response);
			});
			return deffered.promise;
		};
	};