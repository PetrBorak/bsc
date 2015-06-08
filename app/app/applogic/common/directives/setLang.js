/**
 * Created by PetrBorak on 7. 6. 2015.
 */

angular.module('main').directive('setlang',['$location','$translate','$state','$stateParams',function(location,translate,$state,$stateParams){
    return {
        link : function(scope,el,at){
            $(el).on('click',function(event){
                console.log('change lang clicked');
                console.log($state.current);
                $stateParams.lang = at.setlang;
                window.location.hash = window.location.hash.replace(/\/(en|cz)/,at.setlang);
                translate.use(at.setlang);
                scope.$apply();
            })
        }
    }
}])