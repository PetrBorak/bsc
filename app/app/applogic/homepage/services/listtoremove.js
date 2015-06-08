/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').factory('listtoremove',function(){
    return {
        removeitem: function(list, id){
            for(var i = 0; i < list.length; i++){
                if(list[i].id == id){
                    list.splice(i,1)
                }
            }
        }
    }
})
