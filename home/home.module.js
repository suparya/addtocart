(function() {
    'use strict';

    angular
        .module('home', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('homestate', {
                url: '/home',
                templateUrl: 'home/home.tpl.html',
                controller: 'HomeCtrl as vm'
            }).state('contactus', {
                url: '/contactus',
                templateUrl: 'home/contact-us.tpl.html',
                controller: 'ContactUsCtrl as vm'
            }).state('aboutus', {
                url: '/aboutus',
                templateUrl: 'home/about-us.tpl.html',
                controller: 'AboutUsCtrl as vm'
            }).state('YourCart', {
                url: '/Yourcart',
                templateUrl: 'home/cartInfo.tpl.html',
                controller: 'CartInfoCtrl as vm'
            });
    }
})();
