if (!academy) {
    var academy = {};
}
if (!academy.form) {
    academy.form = {};
}

academy.form.formSubmitDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formOptions/form.submit.html',
        scope: {
            submit: '&'
        },
        replace: true,
        link: function (scope, element) {
            var el = element[0]

            el.addEventListener(
                'click',
                function (e) {
                    if (e.stopPropagation) e.stopPropagation();
                    scope.$apply(function (scope) {
                        var fn = scope.submit();
                        if ('undefined' !== typeof fn) {
                            fn();
                        }
                    });
                    return false;
                },
                false
            );
        }
    }
};