"use strict";

angular.module("BlogApp", [])
	.controller("BlogController", function($scope) {
		$scope.posts = posts;
		//$scope.images = images;
});
