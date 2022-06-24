const Employee = require('../lib/Employee');
test('creates a new Employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets Employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toHaveProperty('name');
});

test('gets Employee id', () => {
    const employee = new Employee();

    expect(employee.getId()).toHaveProperty('id');
});

test('gets Employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toHaveProperty('email');
});

test('gets Employee title(returns Employee)', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee')
})