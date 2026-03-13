function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13
    msg.innerHTML =`Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){//bom dia
        img.src =`banco de imagens/manhã.jpg`
        document.body.style.background = `linear-gradient(to bottom, #f83c03,  #f1a65f)`
    } else if (hora >=12 && hora <18){//boa tarde
        img.src = `banco de imagens/tarde.jpg`
        document.body.style.background = `linear-gradient(to bottom,  #f1a65f, #e958bd)`
    } else{//boa noite
        img.src = `banco de imagens/noite.jpg` 
        document.body.style.background =`linear-gradient(to bottom, #0c0427, #71427c)`  
    }
}
