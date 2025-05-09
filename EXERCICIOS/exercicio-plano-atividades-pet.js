// Função para definir a atividade com base no porte
function definirAtividade(porte) {
    switch (porte.toLowerCase()) {
        case "pequeno":
            return "brincar dentro de casa";
        case "médio":
            return "caminhada no quarteirão";
        case "grande":
            return "correr no parque";
        default:
            return "porte inválido";
    }
}

// Função para definir a mensagem com base no tempo e atividade
function definirMensagem(tempo, atividade) {
    if (atividade === "porte inválido") {
        return "Não foi possível definir uma atividade devido a porte inválido.";
    } else if (tempo < 15) {
        return `atividade rápida: ${atividade}`;
    } else if (tempo <= 30) {
        return `tempo ideal: ${atividade}`;
    } else {
        return `hora da diversão: ${atividade}`;
    }
}

// Função principal para gerar o plano de atividade
function planoDeAtividade(nome, porte, tempo) {
    const atividade = definirAtividade(porte);
    const mensagem = definirMensagem(tempo, atividade);

    console.log("Nome do Pet:", nome);
    console.log("Porte:", porte);
    console.log("Tempo disponível:", tempo + " minutos");
    console.log("Plano de atividade:", mensagem);
}

// Exemplo de uso
planoDeAtividade("Pantera", "Médio", 45);
console.log("-------------");
planoDeAtividade("Fido", "Médio", 22);
