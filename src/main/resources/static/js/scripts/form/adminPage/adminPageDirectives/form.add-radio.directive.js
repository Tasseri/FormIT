if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}
academy.admin.formAddRadioDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formEditOptions/form.add.radio.html',
        scope: false,
        replace:true

    }
};