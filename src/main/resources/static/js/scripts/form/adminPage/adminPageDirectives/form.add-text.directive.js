if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}
academy.admin.formAddTextDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formEditOptions/form.add.text.html',
        scope: false,
        replace:true
    }
};