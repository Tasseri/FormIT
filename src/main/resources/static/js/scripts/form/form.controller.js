if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.FormController = function($http) {
    var self = this;
    this.send = function(data) {
        console.log(data);
        var myData = {}//{na null, phone: null};
        //myData.name = data.name.$modelValue;

        myData["phone"] = data["phone"].$modelValue;
        myData["name"] = data["name"].$modelValue;
        console.log(myData);
        $http.post("app/data", myData);

    }
};
