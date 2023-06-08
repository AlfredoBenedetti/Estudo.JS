let valores = [8, 1, 7, 8, 5, 9]
//    for (let posicao = 0; posicao < valores.length; posicao++) {
//        console.log(`A posição ${posicao} tem o valor de ${valores[posicao]}`)
//    }
valores.sort() // coloca em ordem crescente
valores.push(2) // adiciona um valor no final
let local = valores.indexOf(8) // retorna a posição do valor 8
     if (local == -1) { // caso não encontre o valor, o JS retorna o -1
             console.log('O valor desejado não foi encontrado') 
     } else 
   console.log(`O valor escolhedido " 7 " se encontra na posição ${local}`) // caso encontre o valor, o JS retorna a posição

// Modelo de For bem mais prático
for (let posicao in valores) { // para cada posição em valores, mostra o valor daquela posição.}
    console.log(`A posição ${posicao} tem o valor de ${valores[posicao]}`)
}


