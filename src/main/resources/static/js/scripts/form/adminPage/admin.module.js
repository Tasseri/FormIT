angular.module('academy.admin',[])
    .provider('adminService', academy.admin.AdminServiceProvider)
    .directive('addText',academy.admin.formAddTextDirective)
    .directive('draggable', academy.form.formDragDirective)
    .directive('droppable', academy.form.formDropDirective)
    .directive('addRadio',academy.admin.formAddRadioDirective);


