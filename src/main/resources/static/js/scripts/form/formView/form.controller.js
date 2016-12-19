if (!academy) {
    var academy = {};
}
if (!academy.form) {
    academy.form = {};
}

academy.form.FormController = function (formService, $stateParams) {

    var vm = this;
    vm.send = send;
    vm.form = {};
    vm.data = {};
    vm.data.answers = [];
    vm.checkboxesChosen = {};
    vm.saveAnswers = saveAnswers;

    formService.getForm($stateParams.formId)
        .then(function (result) {
            vm.form = result;
            // vm.formId = data.id;
        });

    function saveAnswers() {
        // formService.saveAnswers(vm.answers).then(function (data) {
        //     console.log(data);
        // }, function (error) {
        //     console.error(error);
        // });
    }

    function send() {

        for (var i = 0; i < vm.form.questions.length; i++) {
            if (vm.form.questions[i].type === 37798575) {
                vm.data.answers[i] = vm.checkboxesChosen;
            }
            else if (typeof vm.data.answers[i] === "undefined") {
                vm.data.answers[i] = "";
            }
        }
        formService.send(vm.data, "apoteket", $stateParams.formId);
    }
};
