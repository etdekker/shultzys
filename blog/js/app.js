"use strict";

$('document').ready($('.panel-collapse').collapse('hide'));

angular.module("BlogApp", [])
	.controller("BlogController", function($scope) {
		$scope.posts = posts;
});
