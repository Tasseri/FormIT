if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.formTextareaDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formOptions/form.textarea.html',
        scope:{
            question:'=',
            model:'='
        },
        replace:true

    }
};