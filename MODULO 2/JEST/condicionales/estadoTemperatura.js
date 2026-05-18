function estadoTemperatura(temp) {
    if (typeof temp !== 'number' || Number.isNaN(temp)) {
        throw new TypeError('La temperatura debe ser un número válido');
    }
    if (temp < -50 || temp > 60) {
        throw new TypeError('La temperatura está fuera del rango permitido');
    }

    if (temp >= 30) {
        return 'Calor';
    }
    if (temp >= 15) {
        return 'Templado';
    }
    return 'Frio';
}

module.exports = { estadoTemperatura };
