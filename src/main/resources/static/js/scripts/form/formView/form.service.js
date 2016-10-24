if(!academy){
    var academy = {};
}

if(!academy.form){
    academy.form = {};
}
academy.form.FormServiceProvider =function(){

    this.$get = ['$http',function($http){
        return new academy.form.FormService($http);
    }]
};

academy.form.FormService =function($http){
    this.send = function(data) {
        console.log(data);
        $http.post("/form/data", data);
    }


this.form={ "formtitle" :"test form",
    "questions" : [
        {

            "questiondescr": "Hur upplevde du ditt senaste besök?",
            "choices": [
                {
                    "option": "Bra"
                },
                {
                    "option": "OK"
                },
                {
                    "option": "Dåligt"
                }
            ],
            "answer": "",
            "type" : "radio"
        },
        {

            "questiondescr": "Vilket apotek besökte du?",
            "choices": [
                {
                    "option": "Liljeholmen"
                },
                {
                    "option": "Gamla Stan"
                },
                {
                    "option": "Odenplan"
                }
            ],
            "answer": "",
            "type" : "select"
        },
        {

            "questiondescr": "Hittade du det du sökte efter?",
            "choices": [
                {
                    "option": "Ja"
                },
                {
                    "option": "Nej"
                }
            ],
            "answer": "",
            "type" : "radio"
        },
        {

            "questiondescr": "Kände du att personalen bemötte dig väl?",
            "choices": [
                {
                    "option": "Absolut"
                },
                {
                    "option": "Ja"
                },
                {
                    "option": "Till en viss grad"
                },
                {
                    "option":"Nej"
                }
            ],
            "answer": "",
            "type" : "radio"
        },
        {

            "questiondescr": "Hur ofta besöker du apoteket?",
            "choices": [
                {
                    "option": "Ofta"
                },
                {
                    "option": "Då och då"
                },
                {
                    "option": "Sällan"
                }
            ],
            "answer": "",
            "type" : "check"
        },
        {

            "questiondescr": "Var det något som du upplevde var extra bra?",
            "answer": "",
            "type" : "text"
        },
        {

            "questiondescr": "Vad upplevde du kunde förbättras?",
            "answer": "",
            "type" : "text"
        },
        {
            "questiondescr": "Övriga kommentarer?",
            "type":"text",
            "answer":""
        }
    ]};

    this.getForm=function(){
        return this.form;
    }





    // this.getForm = function() {
    //
    //     function readTextFile(file, callback) {
    //         var rawFile = new XMLHttpRequest();
    //         rawFile.overrideMimeType("application/json");
    //         rawFile.open("GET", file, true);
    //         rawFile.onreadystatechange = function () {
    //             if (rawFile.readyState == 4 && rawFile.status == "200") {
    //                 console.log("två");
    //
    //                 callback(rawFile.responseText);
    //                 console.log("hej");
    //             }
    //         };
    //
    //             rawFile.send(null);
    //     }
    //
    //    return readTextFile("form.json" ,function(text){
    //         var data = JSON.parse(text);
    //        console.log(data);
    //        return data;
    //     });
    //
    // };


    this.addTextQuestion = function(data) {

        var self=this;
        var object =  {
            "questiondescr": data.question,
            "type":"text",
            "answer":''
        };
        self.form.questions.push(object);


    }
};