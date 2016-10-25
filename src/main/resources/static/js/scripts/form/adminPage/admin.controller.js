if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function(adminService) {
    var self = this;
    self.itemBag = [];
    this.send = function () {
        adminService.send()

    };

    self.forma = adminService.getForm();

    this.add = function(data){
        adminService.addTextQuestion(data);

    }

    self.handleDrop = function(item) {
        console.log(item);
        self.itemBag.push(item);
        console.log(self.itemBag);
    }


};

