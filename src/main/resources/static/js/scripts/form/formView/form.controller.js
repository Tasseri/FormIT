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
        for (var i = 0; i < vm.form.questions.length; i++) {
            if (vm.form.questions[i].type === "check") {
                vm.data.answers[i] = vm.form.questions[i].answer;
            }
            else if (typeof vm.data.answers[i] === "undefined" ) {
                vm.data.answers[i] = "";
            }
        }
        formService.send(vm.data, "apoteket", vm.form.formtitle);
    }

    formService.getForm()
        .then (function(data) {
            vm.form = data;
        });

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
