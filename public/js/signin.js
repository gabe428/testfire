$("#signinBtn2").on("click", function() {
    var email = $("#email1").val();
    var password = $("#password1").val();
    console.log(email);
    console.log(password);
    console.log("yeet");

    $.ajax({
      method: "POST",
      url: "/api/auth/signin",
      data: {
        email: email,
        password: password,
      }
    }).fail(function(failure) {
        console.log(failure);
    }).done(function(data) {
        console.log(data);
    });
  
  });