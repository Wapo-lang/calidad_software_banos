function puedeConducir(edad) {
    if (!Number.isInteger(edad) || edad < 0)
        throw new TypeError('edad debe ser un entero no negativo');
    return edad >= 18;
}