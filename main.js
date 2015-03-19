// ** Setup customer.io email for automation
// Setting Mail Server Envirnonment 
if(Meteor.isServer) {
    Meteor.startup(function () { 
        process.env.MAIL_URL="smtp://postmaster@sandbox8d20ea80bc064e46972ebf28519f4878.mailgun.org:a7eca4393d76154f0b9fa0d55f6cba4a@smtp.mailgun.org:465/";
        
 // Creating Mailing Method    
    Meteor.methods({
        'newRun': function (to, link, name, message, html) {
         check(to, String);
         check(link, String);
         check(name, String);
         check(message, String);
         check(html, String);
        Meteor.setTimeout(function() {
        Email.send({
          //add in dynamic from variable to set equal to current.userId(email);
          from: name,
          to: to,
          subject: name + " Has Created A New Lunch Run",
          html: html,

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
            var html = Blaze.toHTML(Template.emailLayout);
        Meteor.call('newRun', to, link, name, message, html);
     }
  });
};

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("tasks");

  Template.order.events({
    'submit .new-task': function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      Meteor.call("addTask", text);

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
  });
 };

 Meteor.methods({
  'addTask': function (text) {

    Tasks.insert({
      text: text,
      createdAt: new Date(),
    });
  },
});

if (Meteor.isServer) {
  Meteor.publish("tasks");
 };