const employeeFolder = require ("./employee");
class engineerFolder extends employeeFolder{
    constructor (github,name,email,id) {
        super(name,email,id);
        this.github = github;
    }
    getRole(){
        return "engineerFolder";
    }
    getGithub(){
        return"${this.gethub}";
    }
}

module.exports = engineerFolder