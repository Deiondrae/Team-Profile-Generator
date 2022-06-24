const Manager = require('../lib/Manager')
test('creates a new Manager object', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test('gets manager role(returns manager)', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});