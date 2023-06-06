function gerar(){
    var n_usuario = window.document.querySelector(`#numero`);
    var tabuada = window.document.querySelector(`#select_tabuada`)
    if (n_usuario.value.length == 0) { // Verificar se o campo está vazio
        window.alert('Por Favor, digite um Número Inteiro!')
    } else {
        var x = Number(n_usuario.value)
        tabuada.innerHTML=" "
           for (var cont=1; cont <= 10; cont++) {
              var item = window.document.createElement('option')
              item.text = `${x} x ${cont} = ${x*cont}`
              item.value = `tabuada${cont}`
              tabuada.appendChild(item)
           }

    }
}