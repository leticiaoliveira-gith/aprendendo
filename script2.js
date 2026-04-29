function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById(`nunt`)
    var res = document.querySelector(`div#res`)


    if (fano.value.length== 0 || fano.value > ano){
        window.alert(`[ERRO] verifique os dados e tente novamente`)
    } else{
         var fsex = document.getElementsByName(`rasex`)
         var idade = ano - Number(fano.value)
         //res.innerHTML =`idade calculada: ${idade}`
         var genero = ``
         var img = document.createElement(`img`)
         img.setAttribute(`id`, `foto`)
         

         if (fsex[0].checked){
            genero = `Homem`
            if (idade >=0 && idade <10){//criança
                img.setAttribute(`src`, `banco de imagens/bebeH.jpg`)
                
            } else if (idade < 21){//jove,
                img.setAttribute(`src`, `banco de imagens/jovemH.jpg`)

            } else if (idade < 50){//adulto
                img.setAttribute(`src`, `banco de imagens/homem.jpg`)

            } else{
                img.setAttribute(`src`, `banco de imagens/velho.jpg`)

            }//idoso

         } else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >=0 && idade <10){//criança
                img.setAttribute(`src`, `banco de imagens/bebeM.jpg`)

            } else if (idade < 21){//jove,
                img.setAttribute(`src`, `banco de imagens/jovemM.jpg`)

            } else if (idade < 50){//adulto
                img.setAttribute(`src`, `banco de imagens/mulher.jpg`)

            } else{
                img.setAttribute(`src`, `banco de imagens/velha.jpg`)
                
            }//idoso
         }

         res.style.textAlign = `center`
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
    }
}