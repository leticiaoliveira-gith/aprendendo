function medirTemperatura (...temperatura){
    const febre = temperatura.filter(t=>t>37.5)
    febre.sort((a,b)=> b-a)
    if (febre.length === 0) {

        return "Tudo normal por aqui!";
    }

    return febre
}
console.log (medirTemperatura(36, 36.5, 37.4,))