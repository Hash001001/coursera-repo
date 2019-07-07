(function(){
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController ', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant("ParentApiUrl","https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);


function FoundItems()
{
  var prom={
    restrict: 'E',
    templateUrl: 'foundItems.html',
    Scope:{

    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController:true
  };
  return prom;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
  var menu=this;
  menu.short_name='';

  menu.matchItemFun=function(searchTerm)
  {
    var promise=MenuSearchService.getMatchedItems(searchTerm);

    promise.then(function(items)
  {
    if(items && items.length>0){
      menu.message='';
      menu.found=items;
    }else{
      menu.message='Nothing found'
    menu.found=[];
      }
  });
  };

  menu.removeItemFun=function (itemIndex) {
    menu.found.splice(itemIndex,1)
  }
}


MenuSearchService.$inject=['$http','ParentApiUrl'];

function MenuSearchService($http,ParentApiUrl){
  var service=this;

  service.getMatchedItems=function(searchTerm){
    return $http({
      method: "GET",
      url:(ParentApiUrl+"/menu_items.json")
    }).then(function(response)
  {
    var foundItems=[];
    for (var i=0;i<response.data['menu_items'].length;i++)
    if(searchTerm.length>0 && response.data['menu_items'][i]['description'].toLowerCase().indexof(searchTerm)!==-1){
      foundItems.push(response.data['menu_items'][i]);
    }
  }
          return foundItems
    });

  };
}


})();
