(function() {
    'use strict';

    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl(commonSvc) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
            commonSvc.getAllCartInfo().then(function(cartItems) {
                vm.itemCount = cartItems.length;
            });
        }
    }
})();
