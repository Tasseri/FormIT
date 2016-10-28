if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService, $routeParams) {
    var vm = this;
    vm.getForms = getForms;
    vm.send = send;
    vm.viewForm = viewForm;
    vm.data = {};

    formService.getForm($routeParams)
        .then (function(data) {
            vm.form = data.form;
            vm.formId = data._id;
        });

    function send () {
        for (var i = 0; i < vm.form.questions.length; i++) {
            if (vm.form.questions[i].type === "checkbox") {
                vm.data.answers[i] = vm.form.questions[i].answer;
            }
            else if (typeof vm.data.answers[i] === "undefined" ) {
                vm.data.answers[i] = "";
            }
        }
        formService.send(vm.data, "apoteket", vm.formId);
    }

    function getForms (){
        formService.getForms()
            .then(function(data){
                vm.forms=data;
            });
    }

    function viewForm (formData) {
        vm.form=formData.form;
    }
};
