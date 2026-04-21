function medirTemperatura (...temperatura){
    const febre = temperatura.filter(t=>t>37.5)
    febre.sort((a,b)=> b-a)

    return febre
}
console.log (medirTemperatura(36, 38.2, 39, 36.5, 37.4, 40.1))