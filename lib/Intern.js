const Employee = require('./Employee')
//intern class extends employee and also has property "school"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }
}
//returns Inter's school
Intern.prototype.getSchool = function() {
    return this.school

}
//returns role "Intern"
Intern.prototype.getRole = function() {
    return 'Intern'
}

module.exports = Intern;