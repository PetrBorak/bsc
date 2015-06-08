/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').factory('preloader',['$compile','$rootScope','$templateRequest',function(compile,rootScope,templateRequest){
    return {
        show: function(){
            var temptoap = templateRequest('/views/preloader.html').then(function(template){
                var toapp = compile(template)(rootScope);
                $('body').prepend(toapp);
                $(toapp).animate({top: 0},800,function(){
                    console.log('animation show end')
                })
                rootScope.$on('closepreloader',function(event){
                    $(toapp).animate({top: '-100px'},800,function(){
                        console.log('preloader hidden removing00');
                        $(toapp).remove();
                    })
                })
            })
        }
    }
}])
