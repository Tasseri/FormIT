/**
 * Created by Administrator on 2016-10-23.
 */
if(!academy){
    var academy = {};
}

if(!academy.admin){
    academy.admin = {};
}
academy.admin.AdminServiceProvider =function(){

    this.$get = ['$http',function($http){
        return new academy.admin.AdminService($http);
    }]
};

academy.admin.AdminService =function($http){
    var id=0;
    var index;


    this.form = {
        formtitle:"test form",
        questions : []};


    this.getForm = function() {
        return this.form

    }

    this.addTextQuestion = function(data) {
        var self=this;
        var object =  {
            "id":id++,
            "questiondescr": data.question,
            "type":"text",
            "answer":''
        };
        self.form.questions.push(object);
        console.log(self.form);
    };

    this.addRadioQuestion = function(data) {
        var self=this;
        var object =  {
            "id":id++,
            "questiondescr": data.radioquestion,
            "type":"radio",
            "answer":'',
            "choices": [
                {"option":''}
            ]
               };
        self.form.questions.push(object);
        console.log(self.form);
    };

    this.addCheckQuestion = function(data) {
        var self=this;
        var object =  {
            "id":id++,
            "questiondescr": data.checkquestion,
            "type":"check",
            "answer":'',
            "choices": [
                {"option":''}
            ]
        };
        self.form.questions.push(object);
        console.log(self.form);
    };

    this.send = function() {

        console.log(this.form);
        $http.post("/rest/form/", this.form);

    };


    this.addNewChoice = function(question) {
        var self=this;
        var object =  {
            "option": ''
        };
        index=self.form.questions.indexOf(question);
        self.form.questions[index].choices.push(object);
        console.log(self.form);
    };

};