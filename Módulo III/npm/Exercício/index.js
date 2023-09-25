const dayjs = require("dayjs")

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs() // Quando não passa nenhum parâmetro, ele puxa a data e horário atual
    const age = today.diff(birthday, 'y') // Comparação da data atual até o dia do aniversário do usuário
    const nextBday = birthday.add(age + 1, 'year') // Adicionou a idade atua + 1 para somar com o ano de nascimento (2000)
    const daysBday = nextBday.diff(today, 'day')

    console.log(`Você atualmente tem ${age} anos de idade`);    
    console.log(`Seu próximo aniversário é em ${nextBday.format("DD/MM/YYYY")}`);    
    console.log(`Faltam exatos ${daysBday} dias para o seu aniversário`);    
}

birthday("2000-11-18")