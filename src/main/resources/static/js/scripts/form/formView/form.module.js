angular.module('academy.form',[])
    .provider('formService', academy.form.FormServiceProvider)
    .directive('formCheck', academy.form.formCheckDirective)
    .directive('formRadio', academy.form.formRadioDirective)
    .directive('formText', academy.form.formTextDirective)
    .directive('formSubmit', academy.form.formSubmitDirective)
    .directive('formSelect', academy.form.formSelectDirective)
    .directive('addText',academy.form.formAddTextDirective)
    .directive('draggable', academy.form.formDragDirective)
    .directive('droppable', academy.form.formDropDirective);

