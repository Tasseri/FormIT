angular.module('academy.admin',[])
    .provider('adminService', academy.admin.AdminServiceProvider)
    .directive('addText',academy.admin.formAddTextDirective)
    .directive('addRadio',academy.admin.formAddRadioDirective);


