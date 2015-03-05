Template.signUp.events
  "click #sign-up #register": (e) ->
    $form = $("#sign-up")
    console.log($form)
    if $form[0][0].value
      email = $form.find("#email").val()
      pass = $form.find("#password").val()
      console.log('signed up')

     Accounts.createUser email: email, password: password, (error) ->
        if error
          alert("Failed")
        else
          Router.go "home"