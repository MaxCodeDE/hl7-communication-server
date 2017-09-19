var hl7 = require('simple-hl7');

var client = hl7.Server.createTcpClient('localhost', 7777);

//Nachricht
var msg = new hl7.Message(
    "RADNOM",
    "RADNOMADT",
    "SMS",
    "081237123",
    "CHARRIS", 
    ["ADT", "A04"],
    "1817457",
    "D",
    "5.5"
);

console.log('Nachricht senden...')
client.send(msg, function(err, ack) {
    console.log('ack erhalten:');
    console.log(ack.log());
});