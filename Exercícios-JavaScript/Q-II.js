// Questão 2: Classificação de nível do jogador

// a. Declaração da variável pontuacaoJogador
let pontuacaoJogador = 750; // Pode alterar para testar diferentes valores

// b. Declaração das constantes (opcional)
const PONTO_MAX_INICIANTE = 1000;
const PONTO_MAX_INTERMEDIARIO = 2500;
const PONTO_MAX_AVANCADO = 5000;

// c. Estrutura condicional
if (pontuacaoJogador <= PONTO_MAX_INICIANTE) {
    // d. Faixa 0-1000
    console.log("Nível do Jogador: Iniciante");
} else if (pontuacaoJogador <= PONTO_MAX_INTERMEDIARIO) {
    // Faixa 1001-2500
    console.log("Nível do Jogador: Intermediário");
} else if (pontuacaoJogador <= PONTO_MAX_AVANCADO) {
    // Faixa 2501-5000
    console.log("Nível do Jogador: Avançado");
} else {
    // Acima de 5000
    console.log("Nível do Jogador: Expert");
}

// Teste com diferentes valores:
// pontuacaoJogador = 500 → "Iniciante"
// pontuacaoJogador = 1500 → "Intermediário"
// pontuacaoJogador = 3000 → "Avançado"
// pontuacaoJogador = 6000 → "Expert"