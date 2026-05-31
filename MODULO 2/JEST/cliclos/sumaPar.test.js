const { sumaPar } = require('./sumaPar');

describe('sumaPar', () => {
    test('Happy path: arreglo con pares e impares', () => {
        expect(sumaPar([1, 2, 3, 4, 5, 6])).toBe(3)
        expect(sumaPar([10, 21, 32])).toBe(2)
    })

    test('Happy path: solo impares o ceros', () => {
        expect(sumaPar([1, 3, 5, 7])).toBe(0)
        expect(sumaPar([0, 2, -4])).toBe(3) 
    })

    test('Sad path: numeros inválidos', () => {
        expect(() => sumaPar([])).toThrow('numeros invalidos')
        expect(() => sumaPar('no soy un array')).toThrow('numeros invalidos')
        expect(() => sumaPar(456)).toThrow('numeros invalidos')
        expect(() => sumaPar(null)).toThrow('numeros invalidos')
    })
})