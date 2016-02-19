

var nameSpace = angular.module("appScope", []);


nameSpace.controller("appController", ['$scope','$http', function($scope, $http)
		{
                        $scope.unit1 = 'one';
                        $scope.showBtnA1 = function() {
                                $scope.showA1 = true;
                                $scope.showA2 = false;
                        };
                        $scope.showBtnA2 = function() {
                                $scope.showA1 = false;
                                $scope.showA2 = true;
                        };
			$http.get('../json/a1.json').success (function(data){
				$scope.datos = data;
		        });
			$http.get('../json/a2.json').success (function(dataA2){
				$scope.datosA2 = dataA2;
		        });

		}]
);
