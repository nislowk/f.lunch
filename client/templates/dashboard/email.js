 // Creating Mailing Method  
 if (Meteor.isServer) {  
    Meteor.methods({
        'sendMail': function (to, link, name, message) {
         check(to, String);
         check(link, String);
         check(name, String);
         check(message, String);
    
        Email.send({
          //add in dynamic from variable to set equal to current.userId(email);
          from: 'Lunch Run',
          to: to,
          subject: name + " Has Created A New Lunch Run",
          text: message + " www.example.com/"+ link
        });
      }
    });
};

// Calling Email Method Locally
if(Meteor.isClient){
Template.create.events({
    'click .create paper-button': function(event, template){
        event.preventDefault();
            var to = template.find('#email').value;
            var name = template.find('#name').value;
            var message = template.find('#message').value;
            var link = Random.id([9]);
        Meteor.call('sendMail', to, link, name, message);
     }
  });
};