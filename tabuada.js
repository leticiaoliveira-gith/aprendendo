function tabuada(){
    let num = document.getElementById (`num`)
    let tab = document.getElementById (`seltab`)

    if (num.value.length == 0){
        window.alert(`digite um número`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        /*while (c<= 10){
           let item = document.createElement(`option`) 
           item.text = `${n} x ${c} = ${n*c}`
           item.value =`tab${c}`
           tab.appendChild(item)
           c++
        } */
       function adicionarItem(){
        if (c <= 10){
            let item = document.createElement(`option`)
            item.text =`${n} x ${c} = ${n*c}`
            item.value = `tab${c}`

            item.style.animationDelay =`${c*0.05}s`;
            tab.appendChild(item)
            c++
            setTimeout(adicionarItem,100)
        }
       }
       adicionarItem()
    }
    


}