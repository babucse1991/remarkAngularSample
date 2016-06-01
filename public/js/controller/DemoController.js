
angular.module('DemoCtrl', []).controller('DemoController', function($scope) {
	
    var ctrl = this;
    this.updateHtml = function() {
    	
      ctrl.tinymceHtml = $scope.trustAsHtml(ctrl.tinymce);
    };
  });