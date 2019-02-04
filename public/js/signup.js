$("#signupButton").on("click", function() {
    var username = $("#username").val();
    var password = $("#password").val();
    console.log("yeet");
    console.log(username);
    console.log(password);
    $.ajax({
      method: "POST",
      url: "/api/auth/login",
      data: {
        username: username,
        password: password
      }
    }).fail(function(failure) {
        console.log(failure);
    }).done(function(data) {
        console.log(data);
    });
  
  });