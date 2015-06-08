/**
 * Created by PetrBorak on 7. 6. 2015.
 */

console.log('main page body in')
angular.module('main').controller('mainpageBody',function($rootScope,parserlist,rest,$translate,$scope,$stateParams,$rootScope){
    $translate.use($stateParams.lang);
    $rootScope.lang = $stateParams.lang;
    console.log('main page body working');
    console.log($stateParams.lang)

    rest.getitems().then(function(data){
        console.log('returning data');
        console.log(data);
        $scope.list = parserlist(data);
        $rootScope.listtoremove = [];
    })
})
