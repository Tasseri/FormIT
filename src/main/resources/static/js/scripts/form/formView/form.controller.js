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
    // vm.data = {};
    vm.saveAnswers = saveAnswers;

    formService.getForm($stateParams.formId)
        .then(function (result) {
            vm.form = result;
            console.log(result);
            vm.answers = [];
            prepareAnswers();
            // vm.formId = data.id;
        });

    function prepareAnswers() {
        if (vm.form != null) {
            for (var i = 0; i < vm.form.questions.length; i++) {
                var object = {
                    "question": vm.form.questions[i].id,
                    "answer": ""
                    // "position": vm.form.questions[i].position
                };
                vm.answers.push(object);
            }
        }
    }
    function saveAnswers() {
        formService.saveAnswers(vm.answers).then(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    }

    function send() {
        console.log(vm.answers);
        //
        // console.log("send");
        // console.log(vm.data.answers);
        // for (var i = 0; i < vm.form.questions.length; i++) {
        //     if (vm.form.questions[i].type === "checkbox") {
        //         vm.data.answers[i] = vm.form.questions[i].answer;
        //     }
        //     else if (typeof vm.data.answers[i] === "undefined") {
        //         vm.data.answers[i] = "";
        //     }
        // }
        // formService.send(vm.data, "apoteket", vm.formId);
    }


};
