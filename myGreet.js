(function(global, $) {
    var Greet = function(firstName, lastName, language) {
        return new Greet.init(firstName, lastName, language);
    }

    Greet.prototype = {};

    Greet.init = function(firstName, lastName, language) {
       var self = this;
       self.firstName = firstName || '';
       self.lastName = lastName || '';
       self.language = language || 'en';


    }

    Greet.init.prototype = Greet.prototype;

    global.Greet = global.G$ = Greet;

}(window, jquery));