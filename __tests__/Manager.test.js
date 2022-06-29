const Manager = require('../lib/Manager')
test('creates a new Manager object', () => {
    const manager = new Manager("Deiondrae", 1, "deiondrae@hotmail.com", "1234567890");

    expect(manager.name).toBe("Deiondrae");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("deiondrae@hotmail.com");
    expect(manager.officeNumber).toBe("1234567890")
});

test('gets manager role(returns manager)', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});