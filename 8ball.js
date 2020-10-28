// Create as "classic" function hosted on twilio.com
// Must be assigned to phone number.

exports.handler = function(context, event, callback) {
  let answers = [
      'It is certain.',
      'As I see it, yes.',
      'Without a doubt.',
      'Yes - definitely.',
      'Outlook good.',
      'Most likely.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      "Don't count on it.",
      'My reply is no.',
      'My sources say no.',
      'Very doubtful.',
      'Outlook not so good.',
      "Don't hold your breath"
  ];
  let yourAnswer = answers[Math.floor(Math.random() * answers.length)];
  
  // 	let twiml = `
  // 	    <?xml version="1.0" encoding="UTF-8"?>
  // 	    <Response>
  // 	      <Message>Don't Hold your breath./Message>
  // 	    </Response>
  // 	`;
  // let response = new Twilio.Response();
  // response.setBody(twiml);
  // response.appendHeader('content-type', 'text/xml');

  let response = new Twilio.twiml.MessagingResponse();
  response.message(yourAnswer);
  callback(null, response);
};