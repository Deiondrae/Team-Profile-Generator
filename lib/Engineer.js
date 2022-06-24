const Employee = require('./Employee')

class Engineer extends Employee {
    constructor() {
        super();

        this.github = "Deiondrae"
    }
}

Engineer.prototype.getGithub = function() {
    return{
        github: this.github
    };
}

Engineer.prototype.getRole = function() {
    return "Engineer"
}

module.exports = Engineer;