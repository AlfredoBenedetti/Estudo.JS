function Executar(){
    let ini = window.document.querySelector('input#n_inicial');
    let fim = window.document.querySelector('input#n_final');
    let passo = window.document.querySelector('input#n_passos');
    let res = window.document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        res.innerHTML = 'Impossível fazer a Contagem, dados faltando...'
    } else  {
        res.innerHTML = "Contando:<br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert(`Passo Inválido ${p} - Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c +=p) {
                res.innerHTML += `${c} \u{1F913}`
            }
        } else {
            // Contagem Decrescente
            for (let c = i; c>=f; c -= p){
            res.innerHTML += `${c} \u{1F913}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}