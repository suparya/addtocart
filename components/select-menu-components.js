(function() {
    'use strict';

    angular
        .module('app')
        .component('selectMenu', {
            bindings: {
                links: '=',
                count: '='
            },
            templateUrl: 'components/selectMenu-component.tpl.html',
            controller: SelectMenuComponent
        });

    function SelectMenuComponent() {
        var vm = this;
    }
})();
