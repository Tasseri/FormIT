angular.module('academy.nav',['ngRoute','academy.form','academy.admin'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/scripts/form/navField/nav.html',
                controller: academy.form.navController,
                controllerAs: 'vm',
                scope: {
                    items: '='
                }
            })
            .when('/form', {
                templateUrl: 'js/scripts/form/formView/form.template.html',
                controller: academy.form.FormController,
                controllerAs: 'vm',
                scope: {
                    items: '='
                }
            })
            .when('/admin', {
                templateUrl: 'js/scripts/form/adminPage/admin.html',
                controller: academy.form.AdminController,
                controllerAs: 'vm',
                scope: {
                    items: '='
                }
            })
            .otherwise('/form')
    }]);