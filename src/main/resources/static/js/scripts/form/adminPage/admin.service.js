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


    this.form = {
        formtitle:"test form",
        questions : []};


    this.getForm = function() {
        return this.form

    }
    this.addTextQuestion = function(data) {
        var self=this;
        var object =  {
            "questiondescr": data.question,
            "type":"text",
            "answer":''
        };
        self.form.questions.push(object);
        console.log(self.form);
    };

    this.addRadioQuestion = function(data) {
       // var radioButtons = [hej, null];
        var self=this;
        var object =  {
            "questiondescr": data.radioquestion,
            "type":"radio",
            "answer":'',
            "choices": []
               };
       // object.choices.push(radioButtons);
        self.form.questions.push(object);
        console.log(self.form);
    };

    this.send = function() {
        console.log(this.form);
        $http.post("/form/data", this.form);
    };

    this.addNewChoice = function(data) {
        var self=this;
        var object =  {
            "option": data.bla
        };
        self.form.questions[0].choices.push(object);
        console.log(self.form);
    };

};