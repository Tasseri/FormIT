if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    this.send = function (data) {
        formService.send(data)

    };
    var self = this;
    self.forma = formService.getForm();

    this.add = function(data){

        formService.addTextQuestion(data);
    }


}
