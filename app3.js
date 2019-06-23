(function () {

  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MyMsgController)
  .filter('change',filterFactory);
MyMsgController.$inject=['$scope','changeFilter'];
  function MyMsgController($scope,changeFilter) {
  $scope.name="Ashir";
  $scope.changeValue="regular";

  $scope.changePic=function () {
    $scope.changeValue="formal";
  };

$scope.mynameFun= function () {
  return "Hello beta kase ho ??"
};

$scope.filterFunction= function () {
  var msg="Hello beta kase ho ??"
  msg=changeFilter(msg);
  return msg;
};

  }

  function filterFactory() {
    return function (input) {
      input= input || "";
      input=input.replace('beta','Ashir');
      return input;

    };
  }

})();
