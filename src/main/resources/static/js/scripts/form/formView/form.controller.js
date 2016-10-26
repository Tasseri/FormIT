if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    var vm = this;

    vm.send = send;
    vm.form = formService.getForm;

    function send (data) {
        formService.send(data);

    }
    formService.getForm()
        .then (function(data) {
            vm.form = data;
        });
};
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
