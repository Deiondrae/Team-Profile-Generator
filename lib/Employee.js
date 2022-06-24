function Employee() {
    this.name = "Villager";

    this.id = 1

    this.email = "Deiondrae@hotmail.com"
}

Employee.prototype.getName = function() {
    return {
        name: this.name
    };
};

Employee.prototype.getId = function() {
    return{
        id: this.id
    };
};

Employee.prototype.getEmail = function() {
    return{
        email: this.email
    };
};

Employee.prototype.getRole = function() {
    return "Employee"
}

module.exports = Employee;