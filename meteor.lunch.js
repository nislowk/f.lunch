// ** Use CoffeeScript 
if(Meteor.isClient){
    
// Registration Form
Template.register.events({
'click .register paper-button': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#register-email').value;
    var passwordVar = template.find('#register-password').value;
    Accounts.createUser({
        email: emailVar,
        password: passwordVar
    });
   }
 });
};

// Login Form
if(Meteor.isClient){
Template.login.events({
'click .login paper-button': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;
    Meteor.loginWithPassword(emailVar, passwordVar);
   }
 });
};

// Logout 
if(Meteor.isClient){
Template.nav.events({
    'click paper-tab.logout': function(event){
        event.preventDefault();
        Meteor.logout();
     }
  });
}

// ** Setup customer.io email for automation
// Setting Mail Server Envirnonment 
if(Meteor.isServer) {
    Meteor.startup(function () { 
        process.env.MAIL_URL="smtp://postmaster@sandbox8d20ea80bc064e46972ebf28519f4878.mailgun.org:a7eca4393d76154f0b9fa0d55f6cba4a@smtp.mailgun.org:465/";
        
 // Creating Mailing Method    
    Meteor.methods({
        'newRun': function (to, link, name, message) {
         check(to, String);
         check(link, String);
         check(name, String);
         check(message, String);
        Meteor.setTimeout(function() {
        Email.send({
          //add in dynamic from variable to set equal to current.userId(email);
          from: 'Karl',
          to: to,
          subject: name + " Has Created A New Lunch Run",
          text: message + " www.example.com/"+ link
        });
       }, 0);
      }
    });
  })
};

// Calling Email Method Locally
if(Meteor.isClient){
Template.create.events({
    'click .create paper-button': function(event, template){
        event.preventDefault();
            var to = template.find('#runEmail').value;
            var name = template.find('#runName').value;
            var message = template.find('#runMessage').value;
            var link = Random.id([9]);
        Meteor.call('newRun', to, link, name, message);
     }
  });
};
