var app=angular.module('myModule', [])
				.controller('myController', ['$scope', function($scope){
					$scope.lists =[
						{title: 'Creating A Interface', finish: false},
						{title: 'Creating A Database Model', finish: false},
					];
					
					$scope.addList = function(){
						$scope.lists.push({title: $scope.newlist, finish: false})
						$scope.newlist = "";
					}
					
					$scope.clear = function(){
						$scope.lists = $scope.lists.filter(function(item){
							return !item.finish;
						});
					}	
				}])