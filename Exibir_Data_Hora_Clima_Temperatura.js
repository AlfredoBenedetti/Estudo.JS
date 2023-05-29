console.log('Feito por AlfredoBenedetti.\nDurante a aula de JavaScript. Prof. Gustavo Guanabara.\nIncluindo uma API do OpenWeatherMap para obter os dados de clima.\n');

const apiKey = '9d4da006c62569fa63644fe01a9b17ba'; // Chave de API válida
const cidade = 'Piracicaba'; // Nome da cidade desejada

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Extraindo os dados relevantes
    const temperaturaKelvin = data.main.temp;
    const descricao = data.weather[0].description;
    const umidade = data.main.humidity;
    // Convertendo a temperatura para Celsius
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    // Traduzindo a descrição
    const traducaoDescricao = traduzirDescricao(descricao);
    // Exibindo os dados formatados
    console.log(`Temperatura: ${temperaturaCelsius.toFixed(0)}°C`);
    console.log(`Descrição: ${traducaoDescricao}`);
    console.log(`Umidade: ${umidade}%`);
  })
  .catch(error => {
    console.log('Erro ao obter dados do clima:', error);
  });

function traduzirDescricao(descricao) {
  switch (descricao) {
    case 'clear sky':
      return 'céu limpo';
    case 'few clouds':
      return 'poucas nuvens';
    case 'scattered clouds':
      return 'nuvens dispersas';
    case 'overcast clouds':
      return 'nublado';
    case 'shower rain':
      return 'chuva fraca';
    case 'rain':
      return 'chuva';
    case 'thunderstorm':
      return 'trovoadas';
    default:
      return descricao;
  }
}

var hora_agora = new Date(); // Criando um objeto Date

// Obtendo os valores de cada atributo
var segundo = hora_agora.getSeconds(); // Obtendo os segundos
var minuto = hora_agora.getMinutes(); // Obtendo os minutos
var hora = hora_agora.getHours(); // Obtendo a hora
var dia = hora_agora.getDate(); // Obtendo o dia
var mes = hora_agora.getMonth(); // Obtendo o mês
var ano = hora_agora.getFullYear(); // Obtendo o ano
var diaSem = hora_agora.getDay(); // Obtendo o dia da semana (0-6)
// 0 - Dom, 1 - Seg, 2 - Ter, 3 - Qua, 4 - Qui, 5 - Sex, 6 - Sáb

// Exibindo os valores
switch (diaSem) {
  case 0:
    diaSem = 'Domingo';
    break;
  case 1:
    diaSem = 'Segunda-feira';
    break;
  case 2:
    diaSem = 'Terça-feira';
    break;
  case 3:
    diaSem = 'Quarta-feira';
    break;
  case 4:
    diaSem = 'Quinta-feira';
    break;
  case 5:
    diaSem = 'Sexta-feira';
    break;
  case 6:
    diaSem = 'Sábado';
    break;
  default:
    break;
}
console.log(`Hoje é dia ${dia}/${mes}/${ano} - ${diaSem}`);
console.log(`Agora são exatamente ${hora}hrs:${minuto}min:${segundo}seg.`);

// Exibindo a mensagem de boas-vindas
if (hora < 12) {
  console.log('Tenha um bom dia!');
} else if (hora <= 18) {
  console.log('Tenha uma boa tarde!');
} else {
  console.log('Tenha uma boa noite!');
}
