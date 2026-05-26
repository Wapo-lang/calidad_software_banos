function sumarNumeros(numeros){
    if (!Array.isArray(numeros)||numeros.length==0)
    {
        throw new TypeError('arreglo no valido');
    }

    let suma=0;
    for(let i=0;i<numeros.length;i++)
    {
        if(numeros[i]>100){
            suma+=numeros[i];
        }
    }
    return suma;
}
module.exports = { sumarNumeros };