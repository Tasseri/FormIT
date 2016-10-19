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
        for(key in data){
            console.log(key)
            if (Object.prototype.hasOwnProperty.call(data, 'NgModelController')) { /
                console.log(data.NgModelController.name)// / true
                                                                                      // do something if it exists, fo sho sho!
            }

//phone och name skall tas in dynamiskt (variabler)
        myData["phone"] = data["phone"].$modelValue;
        myData["name"] = data["name"].$modelValue;
        console.log(myData);
        $http.post("/form/data", myData);

    }
};
