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
        for (var key in data) {
            if (!(typeof data[key] === "undefined")) {
                if (!(typeof data[key].$name === "undefined")) {
                    myData[key] = data[key].$name;
                    myData[key] = data[key].$modelValue;
                }
            }
        }
        console.log(myData);
        $http.post("/form/data", myData);

    }
};
