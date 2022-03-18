const theEmployee = require('./employee');
class theIntern extends theEmployee {
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
