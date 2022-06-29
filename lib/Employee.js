//Employee object has properties "name, id, email"
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
//returns name of employee
Employee.prototype.getName = function() {
    return this.name
};
//returns id of employee
Employee.prototype.getId = function() {
    return this.id

};
//returns email of employee
Employee.prototype.getEmail = function() {
    return this.email
};
//returns role "employee"
Employee.prototype.getRole = function() {
    return "Employee"
}

module.exports = Employee;