// src/precios.js
function calcularPrecioConIva(precio, porcentajeIva) {
  if (precio < 0)          throw new Error('El precio no puede ser negativo');
  if (porcentajeIva < 0)   throw new Error('El IVA no puede ser negativo');
  return precio * (1 + porcentajeIva / 100);
}

function aplicarDescuento(precio, porcentajeDescuento) {
  if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
    throw new Error('El descuento debe estar entre 0 y 100');
  }
  return precio * (1 - porcentajeDescuento / 100);
}

module.exports = { calcularPrecioConIva, aplicarDescuento };