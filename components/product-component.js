(function() {
    'use strict';

    angular
        .module('app')
        .component('allProducts', {
            bindings: {
                itemCount: "="
            },
            templateUrl: 'components/product-component.tpl.html',
            controller: ProductComponent
        });

    function ProductComponent(commonSvc) {
        var vm = this;
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

        function activate() {}

        vm.addToCart = function(obj) {
            vm.itemCount = 0;
            console.log(obj);
            vm.itemCount += 1;
            // console.log(vm.itemCount);
            commonSvc.saveCartInfo(obj).then(function(response) {
                console.log('response', response);
            });
        }
    }
})();
