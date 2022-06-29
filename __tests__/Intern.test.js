const Intern = require('../lib/Intern')
test('creates a new intern object', () => {
    const intern = new Intern("Deiondrae", 1, "deiondrae@hotmail.com", "U of T bootcamp");

    expect(intern.name).toBe("Deiondrae");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("deiondrae@hotmail.com");
});

test("gets intern's school", () => {
    const intern = new Intern("Deiondrae", 1, "deiondrae@hotmail.com", "U of T bootcamp");

    expect(intern.getSchool()).toBe("U of T bootcamp")
});

test('gets intern role(returns intern)', () => {
    const intern = new Intern("Deiondrae", 1, "deiondrae@hotmail.com", "U of T bootcamp");

    expect(intern.getRole()).toBe('Intern');
});