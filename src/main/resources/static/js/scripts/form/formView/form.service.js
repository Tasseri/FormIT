if (!academy) {
    var academy = {};
}

if (!academy.form) {
    academy.form = {};
}
academy.form.FormServiceProvider = function () {

    this.$get = ['$http', '$q', function ($http, $q) {
        return new academy.form.FormService($http, $q);
    }];
};

academy.form.FormService = function ($http, $q) {
    var vm = this;

    vm.getForm = getForm;
    vm.send = send;

    function getForm() {
        var deferral = $q.defer();
        $http.get("/rest/form/")
            .then(function (response) {
                deferral.resolve(response.data);
            });
        return deferral.promise;
    }

    function send(data, formtitle) {
        $http.post("/rest/answer/" + encodeURI(formtitle), answerParser(data));
    }

    function answerParser(data) {
        var answer = [];
        var temp = Object.keys(data.answers).map(key => data.answers[key]);
        for (var k = 0; k < temp.length; k++) {
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
