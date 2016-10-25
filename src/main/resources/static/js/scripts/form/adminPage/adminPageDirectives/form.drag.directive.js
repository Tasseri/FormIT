if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.formDragDirective = function () {
    return function(scope, element) {

        var selectedElement = element[0];

        selectedElement.draggable = true;

        selectedElement.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', e.target.id);
                this.classList.add('drag');
                return false;
            },
            false
        );

        selectedElement.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
};

