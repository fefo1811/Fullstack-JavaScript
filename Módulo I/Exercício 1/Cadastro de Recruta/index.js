const init = confirm("Bem-vind@! Vamos começar o seu cadastramento, recruta?")

const confirmation = () => { init? registration(): alert("Fim do cadastramento") }

const registration = () => { 
    const date = new Date()
    const recruta = {}

    recruta.name = prompt("Insira seu primeiro nome: "),
    recruta.lastName = prompt("Insira seu sobrenome: "),
    recruta.study = prompt("Qual seu campo de estudo: "),
    recruta.yearOfBirth = Number(prompt("Qual seu ano de nascimento: "))

    const age = date.getFullYear() - recruta.yearOfBirth

    alert(`Informações de recrutamento: \n
        Nome do Recruta: ${recruta.name} ${recruta.lastName}
        Campo de Estudo: ${recruta.study}
        Idade: ${age}
    `)
 }
confirmation()

let opcao 