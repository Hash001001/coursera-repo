(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Ashir";

  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
