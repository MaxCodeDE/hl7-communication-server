var hl7 = require('simple-hl7');

const port = 7777;
var app = hl7.tcp();

app.use(function(req, res, next) {
    //req.msg enthält hl7 Nachricht
    console.log('Nachricht erhalten:');
    console.log(req.msg.log());
    console.log('Antwort senden...');
    res.end();
})

app.use(function(err, req, res) {
    // Fehler
    console.log('FEHLER:');
    console.log(err);
    var msa = res.ack.getSegment('MSA');
    msa.editField(1, 'AR');
    res.ack.addSegment('ERR', err.message);
    res.end();
});

app.start(port);

console.log('Server gestartet! Port: ' + port);