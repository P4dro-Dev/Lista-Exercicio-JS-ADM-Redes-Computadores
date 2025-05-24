// Questão 1: Sistema de desconto para loja online

// a. Declaração da constante
const IDADE_MINIMA_DESCONTO = 18;

// b. Declaração da variável idadeCliente
let idadeCliente = 25; // Pode alterar para testar diferentes valores

// c. Declaração da variável tipoAssinaturaCliente
let tipoAssinaturaCliente = "Premium"; // Pode alterar para "Basico" ou outros

// d. Declaração da constante ASSINATURA_NECESSARIA
const ASSINATURA_NECESSARIA = "Premium";

// e. Estrutura condicional
if (idadeCliente >= IDADE_MINIMA_DESCONTO && tipoAssinaturaCliente === ASSINATURA_NECESSARIA) {
    // f. Condição verdadeira
    console.log("Parabéns! Você é elegível para o desconto especial.");
} else {
    // g. Condição falsa
    console.log("Desculpe, você não atende aos critérios para o desconto especial.");
}

// Teste com diferentes valores:
// idadeCliente = 17, tipoAssinaturaCliente = "Premium" → Não elegível
// idadeCliente = 18, tipoAssinaturaCliente = "Basico" → Não elegível
// idadeCliente = 30, tipoAssinaturaCliente = "Premium" → Elegível