//write-pitch-controller.js
'use strict';

module.exports = function(app) {
  app.controller('writePitchController', function($scope, $location, userInputService) {

    $scope.userskills = userInputService.get("userskills");

    //for every skill saved in userskills
    //scan all of pitchText for the index (position) of each key
    //if it's NOT -1, we know that skill word exiss and we should add a property "found"
    //otherwise, make the skill's found property false because it doesn't exist (currently)
    $scope.scanPitchText = function() {
      for (var key in $scope.userskills) {
        if ($scope.pitchText.toLowerCase().indexOf($scope.userskills[key].skillBody.toLowerCase()) != -1) {
          $scope.userskills[key].found = true;
        } else {
          $scope.userskills[key].found = false;
        }
      }
    };
  });
};
