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

        // var deferral = $q.defer();
        // if (angular.equals(formId, {})) {
        //     $http.get("/rest/form/")
        //         .then(function (response) {
        //             console.log(response);
        //             deferral.resolve(response.data);
        //         });
        //
        // }
        // else {
        //     $http.get("/rest/form/" + encodeURI(formId.key))
        //         .then(function (response) {
        //             console.log(response);
        //             deferral.resolve(response.data);
        //         });
        // }
        // return deferral.promise;
    }

    function send(data, companyId, formId) {
        $http.post("/rest/answer/" + encodeURI(companyId)+ "/" + encodeURI(formId), answerParser(data))
            .then(function(response){
                console.log(response);
            });
    }

    function answerParser(data) {
        var answer = [];
        var temp = Object.keys(data.answers).map(key => data.answers[key]);
        for (var k = 0; k < temp.length; k++) {
            if( Object.prototype.toString.call( temp[k] ) === '[object Object]' ) {
                temp[k] = Object.keys(temp[k]);
            }
        }
        for (k = 0; k < temp.length; k++) {
            if( Object.prototype.toString.call( temp[k] ) !== '[object Array]' ) {
                var tempArray = [];
                tempArray.push(temp[k]);
                answer.push(tempArray);
            }
            else {
                answer.push(temp[k]);
            }
        }
        return answer;
    }
};
