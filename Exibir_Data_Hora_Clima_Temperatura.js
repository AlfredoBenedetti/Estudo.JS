console.log('Feito por AlfredoBenedetti.\nDurante a aula de JavaScript. Prof. Gustavo Guanabara.\nIncluindo uma API do OpenWeatherMap para obter os dados de clima.\n');

const apiKey = '9d4da006c62569fa63644fe01a9b17ba'; // Chave de API válida
const cidade = 'Piracicaba'; // Nome da cidade desejada

// Traduzindo a descrição
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

// Obtendo a data e hora atual
const hora_agora = new Date();
const segundo = hora_agora.getSeconds();
const minuto = hora_agora.getMinutes();
const hora = hora_agora.getHours();
const dia = hora_agora.getDate();
const mes = hora_agora.getMonth() + 1; // Adicionando 1 porque os meses são indexados a partir de 0
const ano = hora_agora.getFullYear();
const diaSem = hora_agora.getDay();

// Traduzindo o dia da semana
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const nomeDiaSemana = diasDaSemana[diaSem];

// Exibindo os valores formatados
console.log(`Hoje é dia ${dia}/${mes}/${ano} - ${nomeDiaSemana}`);
console.log(`Agora são exatamente ${hora}h:${minuto}min:${segundo}seg.`);

// Exibindo a mensagem de boas-vindas
if (hora < 12) {
  console.log('Tenha um bom dia!');
} else if (hora <= 18) {
  console.log('Tenha uma boa tarde!');
} else {
  console.log('Tenha uma boa noite!');
}
