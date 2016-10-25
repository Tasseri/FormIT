if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}
academy.admin.formAddTextDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formOptions/form.add.text.html',
        scope: false,
        replace:true

    }
};