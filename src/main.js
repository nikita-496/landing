let payload_1
let payload_2
let nome_1
let nome_2
let phone
let phone_2
let date
let date_2
let amountPeopleTeam
let teamName
let messanger
let messanger_2

const inputNomeComplete = document.getElementById('inputNomeComplete')
const inputPhone = document.getElementById('inputPhone')
const inputDate = document.getElementById('inputDate')
const inputMessanger = document.getElementById('inputMessanger')


inputNomeComplete.addEventListener('input', (e) => {
    nome_1 = e.target.value
})

inputPhone.addEventListener('input', (e) => {
    phone = e.target.value
})

inputDate.addEventListener('input', (e) => {
    date = e.target.value
})

inputMessanger.addEventListener('input', (e) => {
    messanger = e.target.value
})

const form_1 = document.getElementById('form-1')

form_1.addEventListener('submit', () => {
    payload_1 =
        "Nome completo: " +
        nome_1 +
        ", Numero de telefone: " + 
        phone + 
        ", Ano de nascimento: " + 
        date + 
        ", Mensageiro de contato: " + 
        messanger
    sendFormTg(payload_1)
})


const inputNomeComplete_2 = document.getElementById('inputNomeComplete_2')
const inputPhone_2 = document.getElementById('inputPhone_2')
const inputDate_2 = document.getElementById('inputDate_2')
const inputAmountPeopleTeam = document.getElementById('inputAmountPeopleTeam')
const inputTeamName = document.getElementById('inputTeamName')
const inputMessanger_2 = document.getElementById('inputMessanger_2')

inputNomeComplete_2.addEventListener('input', (e) => {
    nome_2 = e.target.value
})

inputPhone_2.addEventListener('input', (e) => {
    phone_2 = e.target.value
})


inputAmountPeopleTeam.addEventListener('input', (e) => {
    amountPeopleTeam = e.target.value
})

inputTeamName.addEventListener('input', (e) => {
    teamName = e.target.value
})

inputMessanger_2.addEventListener('input', (e) => {
    messanger_2 = e.target.value
})


const form_2 = document.getElementById('form-2')

form_2.addEventListener('submit', () => {
    payload_2 =    
    "Nome Completo do capitao: " +
    nome_2 +
    ", Numero de telefone: " + 
    phone_2 + 
    ", Ano de nascimento: " + 
    date_2 + 
    ", Numero de pessoas na equipe: " +
    amountPeopleTeam + 
    ", Nome de equipe: " +
    teamName +
    ", Mensageiro de contato: " + 
    messanger_2
    sendFormTg(payload_2)
})


async function sendFormTg(payload) {
    event.preventDefault();
    const token = "YOUR_BOT_TOKEN"
    const chat_id = ''
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chat_id, text: payload }),
        }
      );
      console.log('response', response)
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }