const request = require('request');

module.exports = {
    
    sendToApi(hl7Json) {
        
        request.post(
            'http://localhost:4000/api-mc/orders',
            { json: JSON.stringify(hl7Json) },
            function (error, response, body) {
                if (error) throw error;
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
            }
        );
    }
    
};