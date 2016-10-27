if (!academy) {
    var academy = {};
}
if (!academy.form) {
    academy.form = {};
}
academy.form.formDropDirective = function () {

    return {
        restrict: 'A',
        scope: {
            drop: '&'
        },
        link: function (scope, element, attr) {
            var el = element[0];
            var vm = this;

            el.addEventListener(
                'dragover',
                function (e) {
                    e.dataTransfer.dropEffect = 'move';
                    if (e.preventDefault) e.preventDefault();
                    this.classList.add('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragenter',
                function (e) {
                    this.classList.add('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragleave',
                function (e) {
                    this.classList.remove('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'drop',
                function (e) {
                    if (e.stopPropagation) e.stopPropagation();
                    this.classList.remove('over');
                    var item = document.getElementById(e.dataTransfer.getData('Text')).cloneNode(true);
                    // this.appendChild(item);

                    scope.$apply(function (scope) {
                            var fn = scope.drop();
                            if ('undefined' !== typeof fn) {
                                fn(item.id);
                            }
                    });

                    return false;
                },
                false
            );
        }
    }
};