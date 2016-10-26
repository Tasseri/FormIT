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



    this.add = function(data){

        formService.addTextQuestion(data);
    };


    this.getForms=function(){
        formService.getForms()
            .then(function(data){

                vm.forms=data;
                console.log(vm.forms);
            });
    }

    this.viewForm=function(formData) {
        vm.form=formData.newform;
    }



};
