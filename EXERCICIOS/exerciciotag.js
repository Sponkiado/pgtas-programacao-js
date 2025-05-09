const nome = "banguela"
const idade = 3
const peso = 12.5
const raca = "cusco"
const adotado = true

const nomeFormatado =(nome.toUpperCase())
const racaFormatada =(raca.slice(0,1).toUpperCase() + raca.slice(1).toLowerCase())

const tag = 
`
TAG
Nome: ${nomeFormatado}
Peso: ${peso} kg
Raça: ${racaFormatada}
`

console.log(tag)
