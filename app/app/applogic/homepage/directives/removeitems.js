/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').directive('removeitems',['preloader','alertx','listtoremove','$rootScope','rest',function(preloader,alert,listtoremove,rootScope,rest){
    return {
        link: function(scope,el,at){
            $(el).bind('click',function(event){
                preloader.show();
                console.log('clicked, will iterating');
                var counter = 0;
                for(var i = 0; i < rootScope.listtoremove.length;i++){
                    (function(x){
                        console.log('iterating');
                        rest.deleteitem(rootScope.listtoremove[x]).then(function(data){
                            counter++;
                            console.log('rootScope.listtoremove');
                            console.log(rootScope.listtoremove);
                            listtoremove.removeitem(scope.list,rootScope.listtoremove[x].id)
                            if((counter)==rootScope.listtoremove.length){
                                rootScope.$emit('closepreloader');
                                console.log('in condition');
                                console.log('rootScope.listtoremove.length');
                                console.log(rootScope.listtoremove.length);
                                console.log(x+1);
                                rootScope.listtoremove = [];
                                rootScope.alert = 'Items deleted';
                                alert.show();
                                var ts = setTimeout(function(){rootScope.$emit('closealert')},5000)
                            }
                        })
                    })(i)
                }
            })
        }
    }
}])
