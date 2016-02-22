

var nameSpace = angular.module("appScope", ['ngSanitize']);


nameSpace.controller("appController", ['$scope','$http', function($scope, $http)
		{
                        $scope.unit1 = 'one';
                        $scope.unitA2 = 'one';
                        $scope.unitA2plus = 'one';
                        $scope.unitB1 = 'one';
                        $scope.unitB1plus = 'one';
                        $scope.showA1 = true;
                        // botones de niveles
                        $scope.showBtnA1 = function() {
                                $scope.showA1 = true;
                                $scope.showA2 = false;
                                $scope.showA2plus = false;
                                $scope.showB1 = false;
                                $scope.showB1plus = false;
                        };
                        $scope.showBtnA2 = function() {
                                $scope.showA1 = false;
                                $scope.showA2 = true;
                                $scope.showA2plus = false;
                                $scope.showB1 = false;
                                $scope.showB1plus = false;
                        };
                        $scope.showBtnA2plus = function() {
                                $scope.showA1 = false;
                                $scope.showA2 = false;
                                $scope.showA2plus = true;
                                $scope.showB1 = false;
                                $scope.showB1plus = false;
                        };

                        $scope.showBtnB1 = function() {
                                $scope.showA1 = false;
                                $scope.showA2 = false;
                                $scope.showA2plus = false;
                                $scope.showB1 = true;
                                $scope.showB1plus = false;
                        };
                        $scope.showBtnB1plus = function() {
                                $scope.showA1 = false;
                                $scope.showA2 = false;
                                $scope.showA2plus = false;
                                $scope.showB1 = false;
                                $scope.showB1plus = true;
                        };


                        //
			$http.get('../json/a1.json').success (function(data){
				$scope.datos = data;
		        });
			$http.get('../json/a2.json').success (function(dataA2){
				$scope.datosA2 = dataA2;
		        });
			$http.get('../json/a2plus.json').success (function(dataA2plus){
				$scope.datosA2plus = dataA2plus;
		        });
			$http.get('../json/b1.json').success (function(dataB1){
				$scope.datosB1 = dataB1;
		        });
			$http.get('../json/b1plus.json').success (function(dataB1plus){
				$scope.datosB1plus = dataB1plus;
		        });


		}]
);
