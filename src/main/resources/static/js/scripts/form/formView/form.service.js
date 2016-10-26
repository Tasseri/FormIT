if (!academy) {
    var academy = {};
}

if (!academy.form) {
    academy.form = {};
}
academy.form.FormServiceProvider = function () {

    this.$get = ['$http', '$q', function ($http, $q) {
        return new academy.form.FormService($http, $q);
    }]
};

academy.form.FormService = function ($http, $q) {
    var vm = this;

    vm.getForm = getForm;
    vm.send = send;

    function getForm() {
        var deferral = $q.defer();
        $http.get("/rest/form/")
            .then(function (response) {
                console.log(response);
                deferral.resolve(response.data);
            });
        return deferral.promise;
    }

    function send(data) {
        console.log(data);
        $http.post("/rest/answer/", data);
    }


    this.getForms = function () {
        var def = $q.defer();
        $http.get("/rest/form/forms/")
            .then(function (response) {
                console.log(response.data);
                def.resolve(response.data);
            });
        return def.promise;
    }

}
