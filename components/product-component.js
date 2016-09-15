(function() {
    'use strict';

    angular
        .module('app')
        .component('allProducts', {
            bindings: {
                cartItems: '=',
                itemCount: '='
            },
            templateUrl: 'components/product-component.tpl.html',
            controller: ProductComponent
        });

    function ProductComponent() {
        var vm = this;
        vm.itemCount = 0;
        vm.cartItems = [];
        vm.allproducts = [{
            name: "Nokia",
            price: 20000,
            description: 'sadfsdfa fsdfasfdg vdsgsdf gs dfg gfh fhgf',
            image: 'images/nokiac1.jpg'
        }, {
            name: "Sony",
            price: 20000,
            description: 'sadfsdfa fsdfasfdg vdsgsdf gs dfg gfh fhgf',
            image: 'images/sony.jpg'
        }, {
            name: "Lenovo",
            price: 20000,
            description: 'sadfsdfa fsdfasfdg vdsgsdf gs dfg gfh fhgf',
            image: 'images/lenovo.jpg'
        }];


        activate();

        function activate() {}

        vm.addToCart = function(obj) {
            console.log(obj);
            vm.itemCount += 1;
            console.log(vm.itemCount);
            vm.cartItems.push(obj);
             console.log(vm.cartItems);

        }
    }
})();
