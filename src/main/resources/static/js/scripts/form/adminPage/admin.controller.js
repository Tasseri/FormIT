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

   vm.addtext = function(bla, index){
        vm.itemBag.splice(index, 1);
        adminService.addTextQuestion(bla);
    };


    vm.handleDrop = function(item) {
        vm.itemBag.push(item);
        console.log(vm.itemBag);
    };

    vm.addradio = function(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addRadioQuestion(data);
    };

    vm.addselect = function(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addSelectQuestion(data);
    };

    vm.addtextarea = function(data, index){
        vm.itemBag.splice(index, 1);
        adminService.addTextareaQuestion(data);
    };


    vm.addcheck = function(data, index) {
        vm.itemBag.splice(index, 1);
        adminService.addCheckQuestion(data);
    };


    this.send = function () {
        adminService.send()
    };

    this.addChoice = function(question, blabla){
        adminService.addNewChoice(question, blabla);

    };

};

