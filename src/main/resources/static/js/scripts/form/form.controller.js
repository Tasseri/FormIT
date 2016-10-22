if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    this.send = function(data) {
        formService.send(data)

    }
    var self=this;
    self.questions={};
    self.questions = {questionsArray : [
        {
            "orderNumber": 1,
            "questiondescr": "Är du okej?",
            "choices": [
                {
                    "option": "Ja"
                },
                {
                    "option": "Nej"
                },
                {
                    "option": "Kanske"
                }
            ],
            "answer": '',
            "type" : "radio"
        },
        {
            "orderNumber": 2,
            "questiondescr": "Är du hungrig?",
            "choices": [
                {
                    "option": "Nej"
                },
                {
                    "option": "Ja"
                },
                {
                    "option": "Alltid"
                }
            ],
            "answer": '',
            "type" : "radio"
        },
        {
            "orderNumber": 3,
            "questiondescr": "Skulle det vara bra med en \"add question\" metod?",
            "choices": [
                {
                    "option": "Japp"
                },
                {
                    "option": "Aldrig"
                },
                {
                    "option": "Varför"
                }
            ],
            "answer": '',
            "type" : "radio"
        },
        {
            "orderNumber": 4,
            "questiondescr": "Här är en extra fråga?",
            "choices": [
                {
                    "option": "Kul"
                },
                {
                    "option": "Okej vi förstår"
                },
                {
                    "option": "En till tack"
                }
            ],
            "answer": '',
            "type" : "radio"
        },
        {
            "orderNumber": 5,
            "questiondescr": "Fråga 5?",
            "choices": [
                {
                    "option": "Ok"
                },
                {
                    "option": "Hej"
                },
                {
                    "option": "På"
                },
                {
                    "option": "Dig"
                }
            ],
            "answer": '',
            "type" : "radio"
        },
        {
            "orderNumber": 6,
            "questiondescr": "Sista frågan?",
            "choices": [
                {
                    "option": "Äntligen"
                },
                {
                    "option": "Då får de räcka"
                },
                {
                    "option": "Några fler alternativ"
                },
                {
                    "option":"Som det här"
                },
                {
                    "option":"och det här"
                }
            ],
            "answer": '',
            "type" : "radio"
        }
    ]};
};
