
angular.module('DemoCtrl', []).controller('DemoController', function($scope) {
	
    var ctrl = this;
    this.updateHtml = function() {
    	alert("DemoController")
      ctrl.tinymceHtml = $scope.trustAsHtml(ctrl.tinymce);
    };
  });