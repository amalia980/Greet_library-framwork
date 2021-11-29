//trick to put semi colon before, if you have a lot of frameworks before this one
/*;*/(function(global, $) {

    //'new' an object
    var Greet = function(firstName, lastName, language) {
        return new Greet.init(firstName, lastName, language);
    }

    //hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es']; //english and spanish

    //informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    //prototype holds methods (to save memory sapce)
    Greet.prototype = {

        //'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            //check that is a valid language
            //references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        //retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language]  + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();//fullname is the function from before
        },

        //chainable methods return their own containing object
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
            return this;//make chainable
        },
        // with this we can modify the language on the go
        setLang: function(lang) {
            this.language = lang;//so set language

            this.validate();

            return this;//make chainable
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selctor!';
            }

            var msg;//determine the message
            if (formal) {
                msg = this.greeting();
            }
            
            else {
                msg = this.greeting();
            }

            //inject the message in the chosen place in the DOM
            $(selector).html(msg);

            return this;//making it chainable
        }
    };

    //the actual object is created here, allowing us the 'new' an object without calling 'new'
    Greet.init = function(firstName, lastName, language) {
       var self = this;
       self.firstName = firstName || '';
       self.lastName = lastName || '';
       self.language = language || 'en';

       self.validate();

    }

    //trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greet.init.prototype = Greet.prototype;

    //attach out Greet to the global object, and provide a shorthand '$G'. make it short and easy
    global.Greet = global.G$ = Greet;

}(window, jQuery));