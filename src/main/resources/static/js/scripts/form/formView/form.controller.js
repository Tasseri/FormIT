if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    var self = this;
    self.forma = formService.getForm();


    this.send = function (data) {
        formService.send(data)
    };

    formService.getForm()
        .then (function(data) {
            self.forma = data;
        });


    this.add = function(data){

        formService.addTextQuestion(data);
    };


    this.getForms=function(){
        formService.getForms()
            .then(function(data){

                self.forms=data;
                console.log(self.forms);
            });
    }

    this.viewForm=function(formData) {
        console.log(formData);
        self.forma=formData.newform;
    }



};
