const Engineer = require('../lib/Engineer')
test('creates a new Engineer object', () => {
    const engineer = new Engineer("Deiondrae", 1, "deiondrae@hotmail.com", "Deiondrae");

    expect(engineer.name).toBe("Deiondrae");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("deiondrae@hotmail.com");
});

test('gets Engineer github username', () => {
    const engineer = new Engineer("Deiondrae", 1, "deiondrae@hotmail.com", "Deiondrae");

    expect(engineer.getGithub()).toBe('Deiondrae');
});

test('gets Engineer role(returns Engineer)', () => {
    const engineer = new Engineer("Deiondrae", 1, "deiondrae@hotmail.com", "Deiondrae");

    expect(engineer.getRole()).toBe('Engineer');
});