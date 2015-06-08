/**
 * Created by PetrBorak on 7. 6. 2015.
 */

angular.module('main').directive('setlang',['$translate','$state','$stateParams',function(translate,$state,$stateParams){
    return {
        link : function(scope,el,at){
            $(el).on('click',function(event){
                console.log('change lang clicked');
                console.log($state.current);
                $stateParams.lang = at.setlang;
                $state.go($state.current.name,$stateParams)
                event.preventDefault();
                translate.use(at.setlang)
            })
        }
    }
}])