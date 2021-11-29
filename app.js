
//gets a new object (the architecture allows us to not have to use the the 'new' keyword here)
var g = G$('Jane', 'Doe');

//user the chainable methods
g.greet()//Hello Jane! 
.setLang('es')//Saludos 
.greet(true);//, Jane Doe 


//use the object on the click of the login button
$('#login').click(function() {

    loginGrt = G$('Jane', 'Doe');

    //hide the the select and input field
    $('#logindiv').hide();

    //passing the #greeting as the selector and the chosen language, logging the result too
    loginGrt.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    //#greeting will change the h1 tag in html file

});