if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    var self = this;
    
    this.send = function (data) {
        formService.send(data)

    };
    formService.getForm()
        .then (function(data) {
            self.forma = data;
        })

    this.add = function(data){

        formService.addTextQuestion(data);
    }

    this.send = function (data) {
        formService.send(data)

    };
    var self = this;
    self.forma = formService.getForm();

    this.add = function(data){

        formService.addRadioQuestion(data);
    }
}
