/**
 * Created by PetrBorak on 7. 6. 2015.
 */

angular.module('main').factory('rest',['$q','$resource','preloader','$rootScope','alertx',function(q,resource,preloader,rootScope,alert){
    return {
        source: resource('http://private-9aad-note10.apiary-mock.com/notes/:id'
                ,null
                ,{'update': { method:'PUT' }
            }),
        getitems : function(){
            var defer = q.defer();
            this.source.query(function(data){
                defer.resolve(data);
            });
            return defer.promise;
        },
        updateitem : function(item){
            preloader.show();
            var defered = q.defer();
            this.source.update({id:item.id},item,function(data){
                defered.resolve(data);
                rootScope.$broadcast('closepreloader');
                rootScope.alert = 'item updated';
                alert.show();
                var tc = setTimeout(function(){rootScope.$broadcast('closealert')},5000)
            })
            return defered.promise;
        },
        getitem : function(id){
            var defered = q.defer();
            this.source.get({id:id},function(data){
                defered.resolve(data);
            })
            return defered.promise;
        },
        deleteitem : function(item){
            preloader.show();
            var defered = q.defer();
            this.source.delete({id:item.id},function(data){
                console.log('succesfull removed');
                console.log(data);
                defered.resolve(data);
                rootScope.$broadcast('closepreloader');
                rootScope.alert = 'item deleted';
                alert.show();
                var tc = setTimeout(function(){rootScope.$broadcast('closealert')},5000)
            });
            return defered.promise;
        }
   }
}])
