$("#signupButton").on("click", function() {
    var username = $("#username").val();
    var password = $("#password").val();
    var last_name = $("#last_name").val();
    var first_name = $("#first_name").val();
    var email = $("#email").val();
    console.log("yeet");
    console.log(username);
    console.log(password);
    console.log(last_name);
    console.log(first_name);
    console.log(email);
    $.ajax({
      method: "POST",
      url: "/api/auth/login",
      data: {
        username: username,
        password: password,
        last_name: last_name,
        first_name: first_name,
        email: email,
      }
    }).fail(function(failure) {
        console.log(failure);
    }).done(function(data) {
        console.log(data);
    });
  
  });