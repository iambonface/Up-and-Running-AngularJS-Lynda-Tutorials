var myApp = angular.module ('myApp', []);

myApp.controller('ArtistCtrl', ['$scope', '$http', function ArtistCtrl ($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
	})	
}]);