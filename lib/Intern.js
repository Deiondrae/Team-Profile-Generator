const Employee = require('./Employee')

class intern extends Employee {
    constructor() {
        super();

        this.school = "U of T"
    }
}

intern.prototype.getSchool = function() {
    return{
        school: this.school
    };
}

intern.prototype.getRole = function() {
    return 'Intern'
}

module.exports = intern;