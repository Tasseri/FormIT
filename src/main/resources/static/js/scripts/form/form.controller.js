if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.FormController = function($http) {
    var self = this;
    this.send = function(data) {
        var myData = {name: null, phone: null};
        myData.name = data.name.$modelValue;
        myData.phone = data.phone.$modelValue;
        console.log(myData);
        $http.post("app/data", myData);

    }
};
