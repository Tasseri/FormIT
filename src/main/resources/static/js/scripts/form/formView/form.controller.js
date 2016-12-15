if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService, $stateParams) {
    var vm = this;
    vm.send = send;
    vm.data = {};

    formService.getForm($routeParams)
        .then (function(data) {
            console.log(data);
            vm.form = data.form;
            // vm.formId = data.id;
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


};
