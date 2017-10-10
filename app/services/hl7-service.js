//var hl7 = require('simple-hl7');

module.exports = {
    
    hl7ObjToJson(hl7Message) {
        
        // PD1
        var pd1 = hl7Message.getSegment('PD1');
        var patientPrimaryAcility = pd1.getComponent(3, 1);
        console.log('Patient Primary Facility: ');
        console.log(patientPrimaryAcility);
        
        // PID
        var pid = hl7Message.getSegment('PID');
        
        var patientPhoneNumber = pid.getComponent(3, 1);
        console.log('Patient Phone Number:' );
        console.log(patientPhoneNumber);
        
        var patientFamilyName = pid.getComponent(5, 1);
        var patientGivenName = pid.getComponent(5, 2);
        console.log('Patient Name: ');
        console.log(patientFamilyName + ' ' + patientGivenName);
        
        var mobidikJson = {
            'familyName': patientFamilyName,
            'patientFamilyName': patientGivenName
        };
        
        
        
        return mobidikJson;
    }
    
}