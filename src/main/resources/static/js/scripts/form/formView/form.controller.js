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
        console.log(vm.data);
        formService.send(vm.data, vm.form.formtitle);
    }

    formService.getForm()
        .then (function(data) {
            vm.form = data;
        });
};
