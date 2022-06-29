const Employee = require('./Employee')

class intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
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