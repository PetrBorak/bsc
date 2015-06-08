/**
 * Created by PetrBorak on 7. 6. 2015.
 */

angular.module('main').controller('detailpageBody',['$stateParams','$scope','rest',function(stateParams,scope,rest){

        scope.$watch('detailform',function(newval,oldval){
            console.log('scope.detailform');
            console.log(scope.detailform);
        })

        rest.getitem(stateParams.id).then(function(data){
            scope.item = data;
        })

        scope.edit = function(){
            rest.updateitem(scope.item)
        }
}])
