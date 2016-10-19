if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.FormController = function($http) {
    var self = this;
    self.send = function(data) {
        console.log(data);
        var myData = {}

//phone och name skall tas in dynamiskt (variabler)
        myData["phone"] = data["phone"].$modelValue;
        myData["name"] = data["name"].$modelValue;
        console.log(myData);
        $http.post("/form/data", myData);

    }
};
