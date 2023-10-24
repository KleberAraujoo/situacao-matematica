function realizarDivisao() {
    try {
      let numero1 = parseFloat(prompt("Informe o primeiro número:"));
      let numero2 = parseFloat(prompt("Informe o segundo número:"));
  
      if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Por favor, informe números válidos.");
      }
  
      let resultado = numero1 / numero2;
  
      if (!isFinite(resultado)) {
        throw new Error("Resultado indefinido. Divisão por zero.");
      }
  
      console.log(`O resultado da divisão é: ${resultado}`);
    } catch (error) {
      console.error(`Erro: ${error.message}`);
    } finally {
      console.log("Operação concluída.");
    }
  }
  
  realizarDivisao();
  