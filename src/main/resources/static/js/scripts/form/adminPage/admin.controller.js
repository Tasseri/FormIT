if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function(adminService) {
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
    vm.forma = adminService.getForm();

    function addText (data, index){
        vm.itemBag.splice(index, 1);
        adminService.addTextQuestion(data);
    }

    function handleDrop (item) {
        vm.itemBag.push(item);
        console.log(vm.itemBag);
    }

    function addRadio(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addRadioQuestion(data);
    }

    function addSelect(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addSelectQuestion(data);
    }

    function addTextarea(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addTextareaQuestion(data);
    }


     function addCheck(data, index) {
        vm.itemBag.splice(index, 1);
        adminService.addCheckQuestion(data);
    }
    function send () {
        adminService.getKey().then(function(data) {
            console.log(data);
            adminService.send(data.key);
        })

    }

    function addChoice(question, option){
        adminService.addNewChoice(question, option);
    }

};

