if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function (adminService) {
    var vm = this;
    vm.itemBag = [];
    vm.addCheck = addCheck;
    vm.addChoice = addChoice;
    vm.addRadio = addRadio;
    vm.addSelect = addSelect;
    vm.addText = addText;
    vm.addTextarea = addTextarea;
    vm.handleDrop = handleDrop;
    vm.send = send;
    vm.form = adminService.getEmptyForm();
    vm.forms = [];
    vm.get = get;
    vm.getForm = getForm;
    vm.chooseForm = chooseForm;

    function get() {
        adminService.get().then(function (data) {
            vm.forms = data;
            console.log(vm.forms);
        }, function (error) {
            console.error(error);
        })
    }

    function chooseForm(form) {
        vm.form = form;
    }

    function getForm(formId) {
        adminService.getForm(formId).then(function (data) {
            console.log(formId);
            vm.form = data;
        }, function (error) {
            console.error(error);
        })
    }

    function send() {
        vm.form.formId = null;
        adminService.send().then(function (data) {
            vm.form = data;
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    }

    function addText(data, index) {
        vm.itemBag[index] = adminService.addTextQuestion(data);
    }

    function handleDrop(item) {
        vm.itemBag.push(item);
    }

    function addRadio(data, index) {
        vm.itemBag[index] = adminService.addRadioQuestion(data);
    }

    function addSelect(data, index) {
        vm.itemBag[index] = adminService.addSelectQuestion(data);
    }

    function addTextarea(data, index) {
        vm.itemBag[index] = adminService.addTextareaQuestion(data);
    }


    function addCheck(data, index) {
        vm.itemBag[index] = adminService.addCheckQuestion(data);
    }

    function addChoice(question, option) {
        adminService.addNewChoice(question, option);
    }

};

