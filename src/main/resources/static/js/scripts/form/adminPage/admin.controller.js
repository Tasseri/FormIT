if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function(adminService) {
    this.send = function () {
        adminService.send()

    };
    var self = this;
    self.forma = adminService.getForm();

    this.add = function(data){

        adminService.addTextQuestion(data);

    }


    this.send = function () {
        adminService.send()

    };
    var self = this;
    self.forma = adminService.getForm();

    this.addr = function(data){

        adminService.addRadioQuestion(data);

    }

    this.send = function () {
        adminService.send()

    };



    this.addChoice = function(data){

        adminService.addNewChoice(data);

    };
}

