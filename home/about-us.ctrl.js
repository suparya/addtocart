(function() {
    'use strict';

    angular
        .module('home')
        .controller('AboutUsCtrl', AboutUsCtrl);


    /* @ngInject */
    function AboutUsCtrl(commonSvc) {
        var vm = this;
        vm.title = 'Controller';
        vm.links = [{
            title: 'Home',
            state: 'homestate'
        }, {
            title: 'Contact Us',
            state: 'contactus'
        }, {
            title: 'About Us',
            state: 'aboutus'
        }];
        activate();

        ////////////////

        function activate() {
            commonSvc.getAllCartInfo().then(function(cartItems) {
                vm.itemCount = cartItems.length;
            });
        }
    }
})();
