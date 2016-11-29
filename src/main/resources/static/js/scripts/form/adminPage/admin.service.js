if (!academy) {
    var academy = {};
}

if (!academy.admin) {
    academy.admin = {};
}
academy.admin.AdminServiceProvider = function () {

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
    vm.get = get;


    vm.form = {
        title: '',
        questions: []
    };

    function getForm() {
        return vm.form

    }

    function get () {
        console.log("getting2");
        var deferral = $q.defer();
        $http.get("http://localhost:8080/rest/form")
            .then(function (response) {
                deferral.resolve(response.data);
            });
        return deferral.promise;
    }

    function addTextQuestion(description) {
        var object = {
            "description": description
        };
        vm.form.questions.push(object);
        return object;
    }

    function addRadioQuestion(data) {
        var object = {
            "description": data,
            "type": "radio",
            "choices": []
        };
        vm.form.questions.push(object);
        return object;
    }

    function addSelectQuestion(data) {
        var object = {
            "description": data,
            "type": "select",
            "choices": []
        };
        vm.form.questions.push(object);
        return object;

    }

    function addTextareaQuestion(data) {
        var object = {
            "description": data,
            "type": "textarea"
        };
        vm.form.questions.push(object);
        return object;
    }

    function addCheckQuestion(data) {
        var object = {
            "description": data,
            "type": "checkbox",
            "choices": []
        };
        vm.form.questions.push(object);
        return object;
    }

    function getKey () {
        var deferral = $q.defer();
        $http.get("http://localhost:8080/rest/key/")
            .then(function (response) {
                deferral.resolve(response.data);
            });
        return deferral.promise;
    }
    function send() {
        $http.post("http://localhost:8080/api/form" , vm.form); // + encodeURI(key)
    }

    function addNewChoice(question, option) {

        index = vm.form.questions.indexOf(question);
        vm.form.questions[index].choices.push(option);
    }

};