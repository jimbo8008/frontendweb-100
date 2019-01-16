describe('data types in javascript', () => {
    describe('strings in javascript', () => {
        it('can be single-quoted', () => {
            const name = 'Teddy';
            expect(name).toBe("Teddy");
        });
        it('fun with strings',   () => {
            const name = "John O'Conner";
            const report = 'She said "Do not do it!" again';
            const report2 = 'She said "Don\'t do it!" again';
        });
        it('has template strings', ()=> {
            let name = 'Jim', age = 42;
            const m1 = 'His name is ' + name + ' and his age is ' + age;
            expect(m1).toBe('His name is Jim and his age is 42');
            const m2 = `His name is ${name} and his age is ${age}`;
            expect(m2).toBe('His name is Jim and his age is 42');
        });
    });
    describe('a few actual types and literals', () => {
        it('some examples', () => {
            const v1 = 'Tacos';
            expect(typeof v1).toBe('string');
            const v2 = 3.11123;
            expect(typeof v2).toBe("number");
            const v3 = true;
            expect(typeof v3).toBe("boolean");
        });
    });
});