const Engineer = require('../lib/Engineer')
test('creates a new Engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets Engineer github username', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toHaveProperty('github');
});

test('gets Engineer role(returns Engineer)', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});