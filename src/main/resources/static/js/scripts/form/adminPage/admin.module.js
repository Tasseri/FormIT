(function() {
    'use strict';

    angular.module('academy.admin',[])
    .provider('adminService', academy.admin.AdminServiceProvider)
    .directive('addQuestion',academy.admin.formAddQuestionDirective)
    .directive('draggable', academy.form.formDragDirective)
    .directive('droppable', academy.form.formDropDirective)
    .directive('radio', academy.admin.RadioDirective)
    .directive('text', academy.admin.TextDirective)
    .directive('checkbox', academy.admin.CheckboxDirective)
    .directive('select', academy.admin.SelectDirective)
    .directive('textarea', academy.admin.TextareaDirective);
})();

