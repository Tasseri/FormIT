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
    vm.form = adminService.getForm();

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


    function send() {
        adminService.send()
    }

    function addChoice(question, option) {
        adminService.addNewChoice(question, option);
    }

};

