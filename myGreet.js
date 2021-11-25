(function(global, $) {
    var Greet = function(firstName, lastName, language) {
        return new Greet.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es']; //english and spanish

    //informal
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    Greet.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language]  + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();//fullname is the function from before
        },

        //chainable methods
        greet: function(formal) {
            var msg;

            //if undefined or null it will be coerced "false"
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            //'this' refers to the calling object at execution time 
            //makes the method chainable
            return this;
        },
        // to see manually when someting is logged
        log: function() {
            if (console) {// if console is true, meaning it is "open"
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },
        // with this we can modify the language on the go
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }
    };


    Greet.init = function(firstName, lastName, language) {
       var self = this;
       self.firstName = firstName || '';
       self.lastName = lastName || '';
       self.language = language || 'en';


    }

    Greet.init.prototype = Greet.prototype;

    global.Greet = global.G$ = Greet;

}(window, jquery));