(function () {
'use strict';

angular.module('calculatorModule',[])
.controller('CalculatorControl', function ($scope) {
$scope.name="";
$scope.totalValue=0;

$scope.displayNumber =function () {
  var totalNameValue =calculateNumericValue($scope.name);
  $scope.totalValue=totalNameValue;
};

function calculateNumericValue(string) {
  var totalSTringValue=0;
  for(var i=0; i<string.length;i++)
  {
    totalSTringValue += string.charCodeAt(i);
  }
  return totalSTringValue;
}

});
})();
