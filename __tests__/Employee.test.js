const Employee = require('../lib/Employee');
test('creates a new Employee object', () => {
    const employee = new Employee("Deiondrae", 1, "deiondrae@hotmail.com");

    expect(employee.name).toBe("Deiondrae");
    expect(employee.id).toBe(1)
    expect(employee.email).toBe("deiondrae@hotmail.com")
});

test('gets Employee name', () => {
    const employee = new Employee("Deiondrae", 1, "deiondrae@hotmail.com");

    expect(employee.getName()).toBe("Deiondrae");
});

test('gets Employee id', () => {
    const employee = new Employee("Deiondrae", 1, "deiondrae@hotmail.com");

    expect(employee.getId()).toBe(1);
});

test('gets Employee email', () => {
    const employee = new Employee("Deiondrae", 1, "deiondrae@hotmail.com");

    expect(employee.getEmail()).toBe("deiondrae@hotmail.com");
});

test('gets Employee title(returns Employee)', () => {
    const employee = new Employee("Deiondrae", 1, "deiondrae@hotmail.com");

    expect(employee.getRole()).toBe('Employee')
})