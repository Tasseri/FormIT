if(!academy){
    var academy = {};
}

if(!academy.admin){
    academy.admin = {};
}
academy.admin.AdminServiceProvider =function(){

    this.$get = ['$http', '$q',function($http, $q){
        return new academy.admin.AdminService($http, $q);
    }]
};

academy.admin.AdminService =function($http, $q){
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
    vm.getKey = getKey;
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

    function getKey () {
        var deferral = $q.defer();
        $http.get("/rest/form/key")
            .then(function (response) {
                deferral.resolve(response.data);
            });
        return deferral.promise;
    }
    function send(key) {
        $http.post("/rest/form/" + encodeURI(key), vm.form);
    }


    function addNewChoice (question, option) {

        index = vm.form.questions.indexOf(question);
        vm.form.questions[index].choices.push(option);
    }

};