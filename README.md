Calculadora de IMC (React Native)
Este projeto é uma aplicação simples desenvolvida em React Native que calcula o Índice de Massa Corporal (IMC) com base no peso e altura informados pelo usuário.

Funcionalidades:
Entrada de nome do usuário;
Entrada de peso (kg);
Entrada de altura (metros ou centímetros);
Cálculo automático do IMC;
Classificação do IMC;
Mensagem personalizada de acordo com o resultado;
Alteração de cor conforme o nível do IMC;
Botão para limpar os campos.

Como funciona:
O cálculo do IMC é feito pela fórmula:
IMC = peso / (altura × altura).

A aplicação também: 
Converte automaticamente altura de cm para metros (quando necessário);
Valida os campos antes do cálculo;
Exibe alertas em caso de erro;
Classificação do IMC.

IMC	Classificação:
Menor que 18.5	Abaixo do peso;
18.5 – 24.9	Peso normal;
25 – 29.9	Sobrepeso;
30 – 34.9	Obesidade Grau I;
35 – 39.9	Obesidade Grau II;
40 ou mais	Obesidade Grau III (Mórbida).

Tecnologias utilizadas:
React Native;
JavaScript (Hooks com useState).

Estrutura do projeto:
App.js ou arquivo principal com o componente Calcular_IMC;
assets/logo.webp → imagem utilizada na interface.

Como executar:
1. Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
2. Acesse a pasta do projeto:
cd seu-repositorio
3. Instale as dependências:
npm install
4. Execute o projeto:
npx expo start

Observações:
Certifique-se de ter o ambiente React Native configurado ou utilizar o Expo;
O teclado numérico é usado para facilitar a entrada de dados;
O app trata entradas inválidas para evitar erros no cálculo.

Autoras: 
Fernanda Lemos;
Dailane Santos.
