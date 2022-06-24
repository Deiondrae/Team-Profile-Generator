const Intern = require('../lib/Intern')
test('creates a new intern object', () => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern();

    expect(intern.getSchool()).toHaveProperty('school');
});

test('gets intern role(returns intern)', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});