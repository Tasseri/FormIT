if(!academy) {
    var academy = {};
}
if(!academy.admin) {
    academy.admin = {};
}
academy.admin.formAddQuestionDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formEditOptions/form.add.question.html',
        scope: {
            "submit":'=',
            "index":'='

        },
        replace:true
        // ,
        // link: function (scope, element) {
        //
        //     var el = element[0].elements[1]
        //
        //     el.addEventListener(
        //
        //         'click',
        //         function (e) {
        //
        //             if (e.stopPropagation) e.stopPropagation();
        //             scope.$apply(function (scope) {
        //                 var fn = scope.submit();
        //                 if ('undefined' !== typeof fn) {
        //                     fn();
        //                 }
        //             });
        //             return false;
        //         },
        //         false
        //     );
        // }
    }
};
