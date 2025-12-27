// Função de multiplicação
function multiplicar(numeroA: number, numeroB: number): number {
    return numeroA * numeroB;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Testes (para você ver funcionando no console)
const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("Davi");

console.log(resultadoMultiplicacao); // Saída: 15
console.log(mensagemSaudacao);       // Saída: Olá Davi
