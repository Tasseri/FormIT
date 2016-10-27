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

    vm.addCheckQuestion = addCheckQuestion;
    vm.addNewChoice = addNewChoice;
    vm.addRadioQuestion = addRadioQuestion;
    vm.addSelectQuestion = addSelectQuestion;
    vm.addTextareaQuestion = addTextareaQuestion;
    vm.addTextQuestion = addTextQuestion;
    vm.getForm = getForm;
    vm.send = send;


    vm.form = {
        formtitle:"test form",
        questions : []};


    function getForm () {
        return vm.form

    }

   function addTextQuestion (description) {
        var object =  {
            "id":id++,
            "description": description,
            "type":"text"
        };
        vm.form.questions.push(object);
    }

    function addRadioQuestion (data) {
        var object =  {
            "id":id++,
            "description": data,
            "type":"radio",
            "choices": []
               };
        vm.form.questions.push(object);
    }

     function addSelectQuestion (data) {
        var object =  {
            "id":id++,
            "description": data,
            "type":"select",
            "choices": []
        };
        vm.form.questions.push(object);

    }

     function addTextareaQuestion (data) {
        var object =  {
            "id":id++,
            "description": data,
            "type":"textarea"
        };
        vm.form.questions.push(object);
        console.log(vm.form);
    }

    function addCheckQuestion (data) {
        var object =  {
            "id":id++,
            "description": data,
            "type":"checkbox",
            "choices": []
        };
        vm.form.questions.push(object);
    }

    function send () {

        console.log(this.form);
        $http.post("/rest/form/", this.form);

    }


    function addNewChoice (question, option) {

        index = vm.form.questions.indexOf(question);
        vm.form.questions[index].choices.push(option);
    }

};