angular.module("academy", ['ngRoute', 'ngMaterial', 'academy.form', 'academy.start', 'academy.admin', 'academy.editor',
'academy.nav'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/scripts/form/startPage/start.html',
                controller: academy.form.StartController,
                controllerAs: 'vm'
            })
            .when('/form', {
                templateUrl: 'js/scripts/form/formView/form.template.html',
                controller: academy.form.FormController,
                controllerAs: 'vm'
            })
            .when('/admin', {
                templateUrl: 'js/scripts/form/adminPage/admin.html',
                controller: academy.admin.AdminController,
                controllerAs: 'vm'
            })
            .otherwise('/form')
    }]).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue-grey')
            .warnPalette('red')
            .backgroundPalette('brown');
    });