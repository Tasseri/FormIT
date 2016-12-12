if (!academy) {
    var academy = {};
}

if (!academy.admin) {
    academy.admin = {};
}
academy.admin.AdminServiceProvider = function () {

    this.$get = ['$http', '$q', function ($http, $q) {
        return new academy.admin.AdminService($http, $q);
    }]
};

academy.admin.AdminService = function ($http, $q) {
    var id = 0;
    var index;
    var vm = this;

    vm.addCheckQuestion = addCheckQuestion;
    vm.addNewChoice = addNewChoice;
    vm.addRadioQuestion = addRadioQuestion;
    vm.addSelectQuestion = addSelectQuestion;
    vm.addTextareaQuestion = addTextareaQuestion;
    vm.addTextQuestion = addTextQuestion;
    vm.getForm = getForm;
    vm.getEmptyForm = getEmptyForm;
    vm.getKey = getKey;
    vm.send = send;
    vm.get = get;

    function getEmptyForm() {
        vm.form = {
            title: '',
            questions: []
        };

        return vm.form;
    }

    function getForm(formId) {
        var deferral = $q.defer();
        var url = "http://localhost:8080/api/form/" + encodeURI(formId);
        $http.get(url, formId)
            .then(function (response) {
                deferral.resolve(response.data);
            }, function (error) {
                console.error(error);
            });
        return deferral.promise;
    }

    function get() {
        var deferral = $q.defer();
        $http.get("http://localhost:8080/api/form")
            .then(function (response) {
                deferral.resolve(response.data);
            }, function (error) {
                console.error(error);
            });
        return deferral.promise;
    }

    function addTextQuestion(description) {
        var object = {
            "question": description,
            "type": 37798572

        };
        vm.form.questions.push(object);
        return object;
    }

    function addRadioQuestion(description) {
        var object = {
            "question": description,
            "type": 37798573,
            "choices": []
        };
        vm.form.questions.push(object);
        return object;
    }

    function addSelectQuestion(description) {
        var object = {
            "question": description,
            "type": 37798574,
            "choices": []
        };
        vm.form.questions.push(object);
        return object;

    }

    function addTextareaQuestion(description) {
        var object = {
            "question": description,
            "type": 37798576
        };
        vm.form.questions.push(object);
        return object;
    }

    function addCheckQuestion(description) {
        var object = {
            "question": description,
            "type": 37798575,
            "choices": []
        };
        vm.form.questions.push(object);
        return object;
    }

    function getKey() {
        var deferral = $q.defer();
        $http.get("http://localhost:8080/rest/key/")
            .then(function (response) {
                deferral.resolve(response.data);
            }, function (error) {
                console.error(error);
            });
        return deferral.promise;
    }

    function send() {
        var deferral = $q.defer();
        $http.post("http://localhost:8080/api/form", vm.form)
            .then(function (response) {
                deferral.resolve(response.data);
            }, function (error) {
                deferral.reject(error);
            });
        return deferral.promise
    }

    function addNewChoice(question, option) {
        var object = {
            "description": option
        };

        index = vm.form.questions.indexOf(question);
        vm.form.questions[index].choices.push(object);
    }
};