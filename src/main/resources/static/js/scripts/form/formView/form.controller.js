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
    vm.data = {};

    vm.submit =function(){
        console.log(this.data);
    };

    function send () {
        formService.send(vm.form);
    };

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
