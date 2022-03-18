const employeeFolder = require('./employee');
class internFolder extends employeeFolder {
    constructor(school="", id="", email="", name=""){
        super(id,email,name);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool(){
        return"${this.school}";
    }
}
module.exports = internFolder