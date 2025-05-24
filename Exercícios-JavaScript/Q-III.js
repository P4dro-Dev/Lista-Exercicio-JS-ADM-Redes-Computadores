// Questão 3: Sistema de login simples

// a. Declaração das constantes
const USUARIO_VALIDO = "adminUser";
const SENHA_VALIDA = "securePass123";

// b. Declaração das variáveis simulando entrada do usuário
let usuarioDigitado = "adminUser"; // Pode alterar para testar
let senhaDigitada = "securePass123"; // Pode alterar para testar

// c. Variável para mensagem de feedback
let loginStatusMessage;

// d. Condicionais para verificação
if (usuarioDigitado === USUARIO_VALIDO) {
    // Condicional aninhada para verificar senha
    if (senhaDigitada === SENHA_VALIDA) {
        loginStatusMessage = "Login bem-sucedido! Bem-vindo!";
    } else {
        loginStatusMessage = "Senha incorreta. Tente novamente.";
    }
    
    // f. Teste de escopo
    var testeEscopoVar = "Variável com var";
    let testeEscopoLet = "Variável com let";
} else {
    loginStatusMessage = "Usuário não encontrado.";
}

// e. Exibição da mensagem
console.log(loginStatusMessage);

// Tentando acessar as variáveis de teste de escopo
console.log(testeEscopoVar); // Funciona - var tem escopo de função
// console.log(testeEscopoLet); // Erro - let tem escopo de bloco

/*
Diferenças de escopo:
- var: tem escopo de função (ou global se declarada fora de função)
  Pode ser acessada fora do bloco onde foi declarada
- let: tem escopo de bloco (não pode ser acessada fora do bloco onde foi declarada)
  Mais segura e recomendada para evitar vazamento de escopo
*/