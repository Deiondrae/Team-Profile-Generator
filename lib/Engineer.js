const Employee = require('./Employee')
//Engineer class extends employee and also has property "github"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github
    }
}
//returns Engineer's github username
Engineer.prototype.getGithub = function() {
    return this.github
}
//returns role "Engineer"
Engineer.prototype.getRole = function() {
    return "Engineer"
}

module.exports = Engineer;