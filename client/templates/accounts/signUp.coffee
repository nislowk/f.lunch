Template.signUp.events
  "submit [data-action=sign-up]": (e) ->
    $form = $ e.target
    if $form[0].valid
      email = $form.find("#email").val()
      password = $form.find("#password").val()

      Accounts.createUser email: email, password: password, (error) ->
        if error
          alert("Failed")
        else
          Router.go "home"