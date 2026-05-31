const { sumatoriaMayor100 } = require('./sumatoriaMayor100');

describe('sumatoriaMayor100',()=>{
    test('Happy path: numeros=[50,50,50]=>true', ()=>{
        expect(sumatoriaMayor100([50,50,50])).toBe(true)
    })
    test('Happy path: numeros=[6,6,6]=>false', ()=>{
        expect(sumatoriaMayor100([6,6,6])).toBe(false)
    })
    test('Sad path: numeros inválido', ()=>{
        expect(()=>sumatoriaMayor100(0).toThrow('numeros invalidos'))
        expect(()=>sumatoriaMayor100([]).toThrow('numeros invalidos'))
        expect(()=>sumatoriaMayor100('10').toThrow('numeros invalidos'))
    })

})