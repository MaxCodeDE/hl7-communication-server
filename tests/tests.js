var hl7 = require('simple-hl7');

// Parse and Log Message
var parser = new hl7.Parser({segmentSeperator: '\n'});
const filePath = "C:/hl7-messages/hl7-example_HMC.hl7";
var msg = parser.parseFileSync(filePath);
console.log("Parser Nachricht:");
console.log(msg);

// Create Client
var client = hl7.Server.createTcpClient('localhost', 7777);

// Send HL7 Message
console.log('Parser Nachricht senden...')
client.send(msg, function(err, ack) {
    console.log('ack erhalten:');
    console.log(ack.log());
});