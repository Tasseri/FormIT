if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function(adminService) {
    var vm = this;
    vm.itemBag = [];

    vm.forma = adminService.getForm();

    this.add = function(data){
        adminService.addTextQuestion(data);

    };

    vm.handleDrop = function(item) {
        console.log(item);
        vm.itemBag.push(item);
        console.log(vm.itemBag);
    };

    this.addr = function(data){
        adminService.addRadioQuestion(data);
    };

    this.send = function () {
        adminService.send()
    };

    this.addChoice = function(data){
        adminService.addNewChoice(data);

    };

};

