/**
 * Created by PetrBorak on 7. 6. 2015.
 */

angular.module('main').controller('mainCtrl',['$scope','$stateParams','$state','preloader', function($scope,$stateParams,state,preloader){
    $scope.$on('$stateChangeStart',function(event){
        preloader.show()
    })
    $scope.$on('$stateChangeSuccess',function(event){
        $scope.$emit('closepreloader');
    })
}])