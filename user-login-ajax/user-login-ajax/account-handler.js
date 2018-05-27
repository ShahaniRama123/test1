var users = [];

$(document).ready(function() {

    // Signup
    $('#btn-signup').on('click' , function() {

        users.push({
          "firstname" : $('#firstname').val(),
          "lastname"  : $('#lastname').val(),
          "username"  : $('#username').val(),
          "pass" : $('#pass').val()
       });

      $.ajax({
          type : 'post',
          url : 'https://nodedatastore.herokuapp.com/aijaz',
          cache : false,
          contentType : 'application/json',
          data: JSON.stringify(users),
          success : function (){
           alert('Congratus! you have successfully signup');
          },

          error : function () {
            alert('Oops! Something went wrong ! try again later');
          },
        });
    });


    // Login
    $('#btn-login').on('click', function() {
       $.ajax({
           type : 'get',
           url : 'https://nodedatastore.herokuapp.com/aijaz',
           cache : false,
           success : function (response) {
              $.each(response, function(key, value) {
                  if(value.username === $('#username').val() && value.pass === $('#pass').val())
                     redirect();
              });
           },

           error : function () {
               alert('Oops! Something went wrong ! try again later');
           }
       });
    });
});

// Pure js Helper function.
function redirect() {
    window.location.replace("Home.html");
}