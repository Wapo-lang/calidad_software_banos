const { sumarNumeros } = require('./sumarNumeros');

describe('sumarNumeros', () => {
    test('Happy path: suma números mayores a 100', () => {
        expect(sumarNumeros([150, 200, 50])).toBe(350);
    });

    test('Happy path: suma solo números mayores a 100', () => {
        expect(sumarNumeros([101, 102, 103])).toBe(306);
    });

    test('Happy path: números menores a 100 devuelve 0', () => {
        expect(sumarNumeros([50, 75, 25])).toBe(0);
    });

    test('Happy path: arreglo mixto', () => {
        expect(sumarNumeros([50, 150, 75, 200])).toBe(350);
    });

    test('Sad path: arreglo vacío lanza error', () => {
        expect(() => sumarNumeros([])).toThrow('arreglo no valido');
    });

    test('Sad path: no es un arreglo lanza error', () => {
        expect(() => sumarNumeros('100')).toThrow('arreglo no valido');
        expect(() => sumarNumeros(null)).toThrow('arreglo no valido');
    });
});