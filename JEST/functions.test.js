const functions = require('./functions');
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// beforeEach(() => { initDB() });
// afterEach(() => { closeDB() });

// beforeAll(() => initDB());
// afterAll(() => closeDB());

// const initDB = () => { console.log("DB started...") }
// const closeDB = () => { console.log("DB closed...") }

const nameCheck = () => {
    console.log("Checking names..")
}
describe("Checking names", () => {
    beforeEach(() => nameCheck());
    test('User is jeff', () => {
        const user = 'jeff';
        expect(user).toBe('jeff');
    })
    test('User is richard', () => {
        const user = 'richard';
        expect(user).toBe('richard');
    })
})

test('Adds 2 + 2 to 4', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test('Adds 2 + 2 to not be equal to 4', () => {
    expect(functions.add(2, 2)).not.toBe(5)
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// Object and arrays are reference values hence toEqual should be used with reference values
test("return user Richard Parkar Object", () => {
    expect(functions.createUser()).toEqual({ firstName: 'Richard', lastName: 'Parkar' });
})

// Less than value 
test('Should be less than sum ', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regular expression 
test("Thhere is no I in team ", () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays 
test("Admin should be in username", () => {
    usernames = ['john', "karen", "admin"];
    expect(usernames).toContain('admin');
});

// Working with Async Data

test("user name shoudl be Kurtis Weissnat", () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Kurtis Weissnat")
    })
});

test("user name shoudl be Kurtis Weissnat", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toBe('Kurtis Weissnat');
});