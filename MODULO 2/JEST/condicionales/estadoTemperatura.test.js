const { estadoTemperatura } = require('./estadoTemperatura');

describe('estadoTemperatura', () => {
    test('30 o más devuelve Calor', () => {
        expect(estadoTemperatura(30)).toBe('Calor');
        expect(estadoTemperatura(40)).toBe('Calor');
    });

    test('15 a menos de 30 devuelve Templado', () => {
        expect(estadoTemperatura(15)).toBe('Templado');
        expect(estadoTemperatura(29.9)).toBe('Templado');
    });

    test('menos de 15 devuelve Frio', () => {
        expect(estadoTemperatura(14.9)).toBe('Frio');
        expect(estadoTemperatura(0)).toBe('Frio');
    });

    test('temperatura inválida lanza TypeError', () => {
        expect(() => estadoTemperatura('20')).toThrow(TypeError);
        expect(() => estadoTemperatura(NaN)).toThrow(TypeError);
        expect(() => estadoTemperatura(-51)).toThrow(TypeError);
        expect(() => estadoTemperatura(61)).toThrow(TypeError);
    });
});