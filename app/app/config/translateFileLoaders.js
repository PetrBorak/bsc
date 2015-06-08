/**
 * Created by PetrBorak on 7. 6. 2015.
 */

angular.module('main').config(function($translateProvider){
    $translateProvider.useStaticFilesLoader({
        prefix: 'app/config/translations/',
        suffix: '.json'
    });
})
