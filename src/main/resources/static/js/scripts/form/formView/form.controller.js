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
    
    function send () {
        formService.send(vm.form);
    }

    formService.getForm()
        .then (function(data) {
            vm.form = data;
        });
};
