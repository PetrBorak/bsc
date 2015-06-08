/**
 * Created by PetrBorak on 8. 6. 2015.
 */

angular.module('main').factory('alertx',['$compile','$rootScope','$templateRequest',function(compile,rootScope,templateRequest){
    return {
        show: function(){
            templateRequest('/views/alert.html').then(function(template){
                console.log('template fetched');
                console.log(template);
                var toap = compile($(template))(rootScope);
                $('body').append(toap);
                $('#alert').animate({top: 0},2500,function(){
                    console.log('show animation done');
                })
                rootScope.$on('closealert',function(){
                    $('#alert').animate({top: '-1000px'},2500,function(){
                        console.log('animation done');
                        $('#alert').remove();
                    })
                })
            })
        }
    }
}])