const Employee = require('./Employee')

class Manager extends Employee {
    constructor() {
        super();

        this.officeNumber = "1234"
    }
}

Manager.prototype.getRole = function() {
    return "Manager"
}

module.exports = Manager;