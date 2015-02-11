if(Meteor.isClient){
// Registration Form
Template.register.events({
'submit form': function(event, template){
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
'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
 });
};

// User Auth View Controller
if(Meteor.isClient){
Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
 });
}

if(Meteor.isServer) {
Meteor.startup(function () { 
    process.env.MAIL_URL="smtp://postmaster@sandbox8d20ea80bc064e46972ebf28519f4878.mailgun.org:a7eca4393d76154f0b9fa0d55f6cba4a@smtp.mailgun.org:465/"; });
Meteor.methods({
  sendEmail: function (email, name, message) {
    check([email, name, message], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //actual email sending method
    Email.send({
      to: email,
      from: 'karl.nislow@gmail.com',
      subject: name,
      text: message
    });
  }
 });
};

if(Meteor.isClient) {
Template.contact.events({
	'submit form':function (event, template) {
			name = template.find('#nameSend').value,
			email = template.find('#emailSend').value,
			message = template.find("#messageSend").value;

		//isFilled and isEmail are my helper methods, which checks if variable exists or is email address valid
		if(isFilled(name) && isFilled(email) && isFilled(message) && isEmail(email)){
			var dataText = "Message from: " + name + " " + "\rEmail: " + email + "\rContent:" + message;

			Meteor.call('sendEmail', dataText);
			//throwAlert is my helper method which creates popup with message
			throwAlert('Email send.', 'success');
		}else{
			throwAlert('An error occurred. Sorry', 'error');
			return false;
		}
	}
});
};

