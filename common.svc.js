(function() {
    'use strict';

    angular
        .module('app')
        .factory('commonSvc', commonSvc);


    /* @ngInject */
    function commonSvc($q) {
        var service = {
                saveCartInfo: saveCartInfo,
                getAllCartInfo: getAllCartInfo
            },
            cartItems = [];
        return service;

        ////////////////

        function saveCartInfo(cartItem) {
            cartItems.push(cartItem);
            console.log(cartItems);
            return $q.when(cartItem);
        }

        function getAllCartInfo() {
            return $q.when(cartItems);
        }
    }
})();
