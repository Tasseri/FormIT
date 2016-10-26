if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function(adminService) {

    var self = this;
    self.forma = adminService.getForm();

    this.add = function(data){

        adminService.addTextQuestion(data);

    };


    this.send = function () {
        adminService.send()

    };

    this.addr = function(data){

        adminService.addRadioQuestion(data);

    };
    this.addc = function(data){

        adminService.addCheckQuestion(data);

    };



    this.addChoice = function(question){


        adminService.addNewChoice(question);

    };
};

