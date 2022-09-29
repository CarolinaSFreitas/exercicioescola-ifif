const prompt = require("prompt-sync")()

const nome = prompt("Qual seu nome? ")
const sexo = prompt("Qual seu sexo? Responda com F ou M: ")
const nota = Number(prompt("Nota: "))

if (sexo == 'F' || sexo == 'f') {
    if (nota >= 6){
        console.log(`${nome}, você foi aprovada! Parabéns!`)
} else {
    console.log(`${nome}, você foi reprovada.`)
}
}else {
    if(nota >= 6){
        console.log(`Parabéns, ${nome}. Você foi aprovado.`)
    }else{
        console.log(`${nome}, você foi reprovado.`)
    }
}