if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.formSelectDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formOptions/form.select.html',
        scope: false,
        replace:true

    }
};