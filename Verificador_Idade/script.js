function verificar() {
    var data = new Date();
    var ano = data.getFullYear();   // Obter o ano atual
    var mes = data.getMonth() + 1;  // Obter o mês atual (adicionar 1, pois o mês começa em 0)
    var dia = data.getDate();       // Obter o dia atual
    var fdia = window.document.querySelector('input#txtdia'); // Campo de entrada para o dia
    var fmes = window.document.querySelector('input#txtmes'); // Campo de entrada para o mês
    var fano = window.document.querySelector('input#txtano'); // Camppo de entrada para o ano
    var res = window.document.querySelector(`div#res`); 
 
    // lendo e executando os cálculos de idade
    if (fano.value.length == 0 || Number(fano.value) > ano ||
        fmes.value.length == 0 || Number(fmes.value) > 12 ||
        fdia.value.length == 0 || Number(fdia.value) > 31) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!';
    } else {
        var fsex = document.getElementsByName('sex');
        var idade;
        if (mes > Number(fmes.value) || (mes === Number(fmes.value) && dia >= Number(fdia.value))) {
            idade = ano - Number(fano.value);
        } else {
            idade = ano - Number(fano.value) - 1;
        }
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
    
        // lendo e classificando a idade e o sexo
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'bebe_h.png');
            } else if (idade < 15) {
                img.setAttribute('src', 'crianca_h.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_h.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png');
            } else if (idade < 100) {
            // No comando abaixo, o sistema separa a data 03/10/1981 e mostra uma foto diferente
            if (fano.value === '1981' && fmes.value === '10' && fdia.value === '03') {
                    img.setAttribute('src', 'alfredo.png');
                } else {
                    img.setAttribute('src', 'idoso_h.png');
                }
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'bebe_m.png');
            } else if (idade < 15) {
                img.setAttribute('src', 'crianca_m.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png');
            } else if (idade < 100) {
                if (fano.value === '1981' && fmes.value === '10' && fdia.value === '3') {
                    img.setAttribute('src', 'imagem_especial.png');
                } else {
                    img.setAttribute('src', 'idoso_m.png');
                }
            }
        }
    
        // Exibindo os resultados
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
