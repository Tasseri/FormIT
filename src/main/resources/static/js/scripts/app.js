(function() {
    'use strict';

    angular.module("academy", ['ui.router', 'ngMaterial', 'academy.form', 'academy.start', 'academy.admin', 'academy.nav'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("form");
            $stateProvider
                .state('start', {
                    url: '/start',
                    templateUrl: 'js/scripts/form/startPage/start.html',
                    controller: academy.form.StartController,
                    controllerAs: 'vm'
                })
                .state('form', {
                    url: '/form',
                    templateUrl: 'js/scripts/form/formView/form.template.html',
                    controller: academy.form.FormController,
                    controllerAs: 'vm'
                })
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'js/scripts/form/adminPage/admin.html',
                    controller: academy.admin.AdminController,
                    controllerAs: 'vm'
                })
        }]).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue-grey')
            .warnPalette('red')
            .backgroundPalette('brown');
    });
})();