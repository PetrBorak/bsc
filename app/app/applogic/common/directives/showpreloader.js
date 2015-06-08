/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').directive('showpreloader',['preloader', function(preloader){
    return {
        link : function(scope,el,at){
            $(el).bind('click',function(event){
                preloader.show();
            })
        }
    }
}])

