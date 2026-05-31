const { sumarHasta } = require('./sumarHasta');

describe('sumarHasta',()=>{
    test('Happy path: n=5=>15', ()=>{
        expect(sumarHasta(5)).toBe(15)
    })
    test('Happy path: n=1=>1', ()=>{
        expect(sumarHasta(1)).toBe(1)
    })
    test('Sad path: n inválido', ()=>{
        expect(()=>sumarHasta(0).toThrow('n debe ser entero=>1'))
        expect(()=>sumarHasta(2.6).toThrow('n debe ser entero=>1'))
        expect(()=>sumarHasta('10').toThrow('n debe ser entero=>1'))
    })

})