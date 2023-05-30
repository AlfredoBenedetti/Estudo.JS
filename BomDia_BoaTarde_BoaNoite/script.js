function carregar() {
var msg = window.document.querySelector('div#msg');
var msg2 = window.document.querySelector('div#msg2');
var msg3 = window.document.querySelector('div#msg3');
var img = window.document.querySelector('img#imagem');

var agora = new Date();             // Criando um objeto Date
var hora = agora.getHours();        // Obtendo a hora
var minuto = agora.getMinutes();    // Obtendo os minutos
var segundo = agora.getSeconds();   // Obtendo os segundos
var ano = agora.getFullYear();      // Obtendo o ano
var mes = agora.getMonth() + 1;     // Obtendo o mês, os meses são representados de 0 a 11, onde 0 é Janeiro.
                                    // Ao adcionar +1 ao resultado de getMonth(), estamos ajustando o valor 
                                    // Dessa forma, janeiro será representado como 1
var dia = agora.getDate();          // Obtendo o dia
var diaSem = agora.getDay();        // Obtendo o dia da semana (0-6)
// 0 - Dom, 1 - Seg, 2 - Ter, 3 - Qua, 4 - Qui, 5 - Sex, 6 - Sáb

// Exibindo os valores
switch (diaSem) {
  case 0:
    diaSem = 'Domingo';
    break;
  case 1:
    diaSem = 'Segunda-Feira';
    break;
  case 2:
    diaSem = 'Terça-Feira';
    break;
  case 3:1
    diaSem = 'Quarta-Feira';
    break;
  case 4:
    diaSem = 'Quinta-Feira';
    break;
  case 5:
    diaSem = 'Sexta-Feira';
    break;
  case 6:
    diaSem = 'Sábado';
    break;
  default:
    break;
}
msg.innerHTML += `Hoje é ${diaSem} - ${dia}/${mes}/${ano}`
msg2.innerHTML += `Agora são exatamente ${hora}hrs:${minuto}min:${segundo}seg.`

// Exibindo a mensagem de boas-vindas
if (hora >= 0 && hora < 12) {
    img.src = 'manha.png';
    document.body.style.background = '#e2cd9f';
    msg3.innerHTML = `Tenha um <br> <strong>Ótimo Dia!</strong>`
} else if (hora >= 12 && hora <= 18) {
    img.src = 'img/tarde.png';
    msg3.innerHTML = `Tenha uma <br> <strong>Ótimo Tarde!</strong>`
    document.body.style.background = '#b9846f';
} else {
    img.src = 'img/noite.png';
    document.body.style.background = '#515154';
    msg3.innerHTML = `Tenha uma <br> <strong>Ótimo Noite!</strong>`
}
}