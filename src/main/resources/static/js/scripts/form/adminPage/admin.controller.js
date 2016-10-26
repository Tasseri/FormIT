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

    this.add = function(data, index){
        vm.itemBag.splice(index, 1);
       // console.log(itemBag);
        adminService.addTextQuestion(data);

    };

    vm.handleDrop = function(item) {
        console.log(item);
        vm.itemBag.push(item);
        console.log(vm.itemBag);
    };

    this.addr = function(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addRadioQuestion(data);
    };

    };
    this.addc = function(data){

        adminService.addCheckQuestion(data);

    this.send = function () {
        adminService.send()
    };

    this.addChoice = function(question){
        adminService.addNewChoice(question);

    };

};

