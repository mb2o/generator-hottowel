(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('htWidgetHeader', htWidgetHeader);

    /* @ngInject */
    function htWidgetHeader() {
        // Usage:
        // <div ht-widget-header title="vm.map.title">
        //     <span><i class="glyphicon glyphicon-edit"></i></span>
        // </div>
        // Creates:
        // <div ht-widget-header=""
        //      title="Movie"
        //      allow-collapse="true">
        //     <span><i class="glyphicon glyphicon-edit"></i></span>
        // </div>
        var directive = {
            scope: {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@'
            },
            templateUrl: 'app/widgets/widget-header.html',
            restrict: 'EA',
            transclude: true
        };
        return directive;
    }
})();
