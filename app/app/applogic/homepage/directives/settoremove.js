/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').directive('settoremove',['$rootScope','listtoremove','rest', function(rootScope,listtoremove, rest){
    return {
        link: function(scope,el,at){
            $(el).bind('click',function(event){
                if($(el).prop('checked')){
                    console.log('is checked');
                    console.log($(el).prop('checked'))
                    rootScope.listtoremove.push(scope.item);
                    console.log('listofels');
                    console.log(rootScope.listtoremove);

                }else{
                    console.log('is not checked');
                    listtoremove.removeitem(rootScope.listtoremove,scope.item.id);
                    console.log('listofels');
                    console.log(rootScope.listtoremove);
                }
                rootScope.$apply();
            })
        }
    }
}])