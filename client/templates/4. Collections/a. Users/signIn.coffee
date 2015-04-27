 Template.signIn.events 
  "click #sign-in #login": (e) ->
    $form = $("#sign-in")
    console.log($form)
    if $form[0][0].value
      email = $form.find("#email").val()
      password = $form.find("#password").val()
      console.log('signed in')
      Meteor.loginWithPassword email, password, (error) ->
        if error
          alert("Failed")
        else
          Router.go "home"