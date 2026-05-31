const { array } = require('./array');

describe('array',()=>{
    test('Happy path: numeros=[5,5,5]=>5', ()=>{
        expect(array([5,5,5])).toBe(5)
    })
    test('Happy path: numeros=[6,6,6]=>6', ()=>{
        expect(array([6,6,6])).toBe(6)
    })
    test('Sad path: numeros inválido', ()=>{
        expect(()=>array(0).toThrow('numeros no es un arreglo'))
        expect(()=>array([]).toThrow('numeros no es un arreglo'))
        expect(()=>array('10').toThrow('numeros no es un arreglo'))
    })

})