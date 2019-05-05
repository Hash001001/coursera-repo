(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope) {
    $scope.items="";

    $scope.btnOnClick=function () {
    if(!$scope.items)
    {
      $scope.msg="Please enter data first";
      $scope.getStyle($scope.msg);

    }else{
      var itemValues=$scope.items;
      var subString=itemValues.split(',');

      if(subString.length > 3)
      {
        $scope.msg="Too Much";
        $scope.getStyle($scope.msg);
      }
      else {
        $scope.msg="enjoy!";
$scope.getStyle($scope.msg);
      }

    }
    };


    $scope.getStyle=function (msg) {
      if(msg=="enjoy!"){
      return {'color':'green'};
    }else if(msg=="Too Much")
    {
        return {'color':'green'};
      }else {
        return {'color':'red'};
      }
    };

  };



})();
