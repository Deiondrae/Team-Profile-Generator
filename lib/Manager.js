const Employee = require('./Employee')
//Manager class extends employee, and also has property "officeNumber"
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}
//returns role "Manager"
Manager.prototype.getRole = function() {
    return "Manager"
}

module.exports = Manager;