/**
 * Created by Administrator on 2016-10-23.
 */
if(!academy){
    var academy = {};
}

if(!academy.admin){
    academy.admin = {};
}
academy.admin.AdminServiceProvider =function(){

    this.$get = ['$http',function($http){
        return new academy.admin.AdminService($http);
    }]
};

academy.admin.AdminService =function($http){
    var id=0;
    var index;
    var vm = this;


    this.form = {
        formtitle:"test form",
        questions : []};


    this.getForm = function() {
        return vm.form

    }

    this.addTextQuestion = function(bla) {

        var object =  {
            "id":id++,
            "description": bla,
            "type":"text"
        };
        vm.form.questions.push(object);
    };

    this.addRadioQuestion = function(data) {
        var object =  {
            "id":id++,
            "description": data,
            "type":"radio",
            "choices": []
               };
        vm.form.questions.push(object);
    };

    this.addSelectQuestion = function(data) {
        var object =  {
            "id":id++,
            "description": data,
            "type":"select",
            "choices": []
        };
        vm.form.questions.push(object);

    };
    this.addTextareaQuestion = function(data) {

        var object =  {
            "id":id++,
            "description": data,
            "type":"textarea"
        };
        vm.form.questions.push(object);
        console.log(vm.form);
    };

    this.addCheckQuestion = function(data) {

        var object =  {
            "id":id++,
            "description": data,
            "type":"checkbox",
            "choices": []
        };
        vm.form.questions.push(object);
    };

    this.send = function() {

        console.log(this.form);
        $http.post("/rest/form/", this.form);

    };


    this.addNewChoice = function(question, option) {


        index = vm.form.questions.indexOf(question);
        vm.form.questions[index].choices.push(option);
    };

};