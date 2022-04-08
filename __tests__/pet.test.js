const Pet = require('../src/pet');

const MAXIMUM_FITNESS = 10;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;


describe ('constructor' , () => {
    it ('returns an object' , () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    
    it ('sets the name property' , () => {
        const pet = new Pet ('Fido');
        expect(pet.name).toEqual('Fido');
     });
     it ('has an initial age of 0' , () => {
         const pet = new Pet ('Fido');
         expect(pet.age).toEqual(INITIAL_AGE);
     });
     it('has an initial hunger of 0' , () => {
         const pet = new Pet ('Fido');
         expect(pet.hunger).toEqual(INITIAL_HUNGER);
     });
     it('has an initial fitness of 10', () => {
         const pet = new Pet ('Fido'); 
         expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
     });

     describe ('growUp' , () => {
    it ('increments the age by 1' , () => {
        const pet = new Pet ('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet  ('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('reduces the fitness by 3', () => {
        const pet = new Pet ('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
    describe ('walk' , () => {
        it('it increases fitness by 4' , () => {
            const pet = new Pet ('Fido');
            pet.fitness = 8;
            pet.walk();
            expect (pet.fitness).toEqual(MAXIMUM_FITNESS);
        });
    
});
     
  });
   
      });
