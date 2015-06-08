/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').directive('deleteitem',['rest','$state','$stateParams','listtoremove',function(rest,state,stateParams,listtoremove){
    return {
        link: function(scope,el,at){
            $(el).bind('click',function(event){
                event.preventDefault();
                rest.deleteitem(scope.item).then(function(data){
                    state.go('mainpage',{lang:stateParams.lang});
                    listtoremove.removeitem(scope.$parent.list,scope.item.id)
                })
            })
        }
    }
}])
