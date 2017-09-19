var hl7 = require('simple-hl7');

var parser = new hl7.Parser({segmentSeperator: '\n'});

const filePath = "hl7-examples/hl7-example1.hl7";

var msg = parser.parseFileSync(filePath);

console.log("Parser Nachricht:");
console.log(msg);


var client = hl7.Server.createTcpClient('localhost', 7777);

console.log('Parser Nachricht senden...')
client.send(msg, function(err, ack) {
    console.log('ack erhalten:');
    console.log(ack.log());
});