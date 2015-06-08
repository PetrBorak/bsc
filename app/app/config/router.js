/**
 * Created by PetrBorak on 7. 6. 2015.
 */
console.log('router.js');
console.log(angular.module('main'));
console.log(angular.module('ui.router'));

angular.module('main').config(function($stateProvider,$urlRouterProvider,$translateProvider){

    console.log('volam fazi config');
    console.log($stateProvider);

    $urlRouterProvider.otherwise('/cz');

    $stateProvider.state('mainpage',{
        url:"/{lang:cz|en}",
        views: {
            headerview: {
              templateUrl:'../../views/homepage/headerhomepage.html'
            },
            bodyview: {
                controller: 'mainpageBody',
                templateUrl: '../../views/homepage/bodyhomepage.html'
            }
        }
    })
        .state('detail',{
            url: "/{lang:cz|en}/detail/{id:int}",
            views: {
                headerview : {
                    templateUrl: '../../views/homepage/headerhomepage.html'
                },
                bodyview: {
                    templateUrl: '../../views/detail/bodydetail.html',
                    controller : 'detailpageBody'
                }
            }
        })
})
