const { calcularPrecioConIva, aplicarDescuento } = require('../basicos/notas');

test('precio con IVA del 21%', () => {
  expect(calcularPrecioConIva(100, 21)).toBeCloseTo(121, 2);
});

test('precio con IVA del 10%', () => {
  expect(calcularPrecioConIva(89.99, 10)).toBeCloseTo(98.989, 2);
});

test('descuento del 20%', () => {
  expect(aplicarDescuento(200, 20)).toBeCloseTo(160, 2);
});

test('precio con IVA mayor que el original', () => {
  const resultado = calcularPrecioConIva(100, 21);
  expect(resultado).toBeGreaterThan(100);
});

test('precio negativo lanza error', () => {
  expect(() => calcularPrecioConIva(-10, 21)).toThrow('El precio no puede ser negativo');
});

test('descuento fuera de rango lanza error', () => {
  expect(() => aplicarDescuento(100, 150)).toThrow('El descuento debe estar entre 0 y 100');
  expect(() => aplicarDescuento(100, -5)).toThrow('El descuento debe estar entre 0 y 100');
});