if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    var vm = this;

    vm.send = send;
    vm.forma = formService.getForm;
    
    function send (data) {
        formService.send(data)

    };
    formService.getForm()
        .then (function(data) {
            vm.forma = data;
        })
};
