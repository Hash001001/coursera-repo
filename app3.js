(function () {

  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MyMsgController);
MyMsgController.$inject=['$scope'];
  function MyMsgController($scope) {
  $scope.name="Ashir";
  $scope.changeValue="regular";

  $scope.changePic=function () {
    $scope.changeValue="formal";


  };

  }

})();
