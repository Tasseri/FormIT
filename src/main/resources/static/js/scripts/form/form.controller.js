if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
//refactor till service och serviceprovider create service
academy.form.FormController = function(formService) {
    this.send = function(data) {
        formService.send(data)

    }
};
