(function() {
    'use strict';

    angular
        .module('app', ['ui.router','home'])
        .config(config);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

})();
