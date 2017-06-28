// var App = angular.module('AngularQuest', ['ngResource']);
var App = angular.module('AngularQuest', []);

App.controller('griffinCtrl', ['$scope', function ($scope) {
  $scope.griffin = [
    { "firstname": "Peter", "lastname": "Griffin" },
    { "firstname": "Lois", "lastname": "Pewterschmidt" },
    { "firstname": "Megatron", "lastname": "Griffin" },
    { "firstname": "Christopher", "lastname": "Griffin" },
    { "firstname": "Stewart", "lastname": "Griffin" },
    { "firstname": "Brian", "lastname": "Griffin" }
  ];

  // $scope.showPeople = true;
}]);