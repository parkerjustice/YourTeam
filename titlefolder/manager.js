const employeeFolder = require('./employee');
class managerFolder extends employeeFolder{
    constructor(officeN = "", name = "", id = "", email = ""){
        super(name,id,email);
        this.officeN = officeN;

    }
    getOfficeN(){
        return this.officeN;
    }
    getRole() {
        return "Manager";


    }
}
module.exports = managerFolder