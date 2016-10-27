(function() {
    'use strict';

    angular.module('academy.admin',[])
    .provider('adminService', academy.admin.AdminServiceProvider)
    .directive('addQuestion',academy.admin.formAddQuestionDirective)
    .directive('draggable', academy.form.formDragDirective)
    .directive('droppable', academy.form.formDropDirective)
    .directive('addRadio', academy.admin.RadioDirective)
    .directive('addText', academy.admin.TextDirective)
    .directive('addCheckbox', academy.admin.CheckboxDirective)
    .directive('addSelect', academy.admin.SelectDirective)
    .directive('addTextarea', academy.admin.TextareaDirective);
})();

