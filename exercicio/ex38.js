function classificarXp (...nivel){
    return nivel.map(xp =>{
        if(xp <= 2000){
            return "Iniciante"
        } else if (xp <= 5000){
            return "Guerreiro"
        } else{
            return"Mestre"
        }
    })
}
console.log(classificarXp(1200, 4500, 9000, 2100))