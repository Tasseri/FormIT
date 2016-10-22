if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.formAddTextDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formOptions/form.add.text.html',
        scope: false,
        replace:true

    }
};