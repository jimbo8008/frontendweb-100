describe('arrays literals', () => {
    it('has them', () => {
        const things = [];
        expect(things[99]).toBeUndefined();
        things[0] = 1;
        things[1] = 3.4;
        things[2] = things;
    });

    it('they can be initialized', () => {
    const colors = ['red', 'green', 'orange'];
    expect(colors.length).toBe(3);
    expect(colors[0]).toBe('red');
    });

    it('deconstructing arrays', () => {
    const luckyNumbers = [1,2,108, 22];

    // const third = luckyNumbers[2];
    // const fourth = luckyNumbers[3];
    const [, , third, fourth] = luckyNumbers;
    
    expect(third).toBe(108);
    expect(fourth).toBe(22);     
    });
});

describe('object literals', () => {
    it('simple example', () => {
        const movie = {};
        movie.title = 'Jaws';
        movie.director = 'Speilberg';
        movie.yearReleased = 1977;

        expect(movie.title).toBe('Jaws');
        expect(movie.yaerReleased).toBeUndefined();
        expect(movie.yearReleased).toBe(1977);

        movie.yaerReleased = 1988;
    });
    it('initializing an object', () => {
        const person = {
            name: {
                first: 'Adam',
                last: 'Driver'  
            },
            roles: ['Kylo Ren', 'Ben Solo']
        };
        expect(person.name.last).toBe('Driver');
        expect(person.roles[1]).toBe('Ben Solo');      
    });
    it('property access', () => {
        const someObj = { color: 'blue' };

        expect(someObj.color).toBe('blue');
        expect(someObj['color']).toBe('blue');

        const cast = {
            'luke skywalker': 'Mark Hamill',
            'han solo': 'Harrison Ford'
        };

        expect(cast['luke skywalker']).toBe('Mark Hamill'); 

    });
    it('destructuring an object', () => {
        const book = {
            title: 'Walden',
            author: 'Thoreau',
            price: 22.38
        };

        // const title = book.title;
        // const price = book.price;
        const { title, price: cost } = book;

        expect(title).toBe('Walden');
        expect(cost).toBe(22.38); 

    });
});
