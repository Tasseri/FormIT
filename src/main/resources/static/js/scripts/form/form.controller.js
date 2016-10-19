if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.FormController = function($http) {
    var self =this;
    self.send = function(data) {
        console.log(data);
        $http.post("/form/data", data);

    }
};
