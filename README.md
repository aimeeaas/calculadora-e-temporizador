## Projeto Cálculos & Temporizadores

Aplicativo desenvolvido como atividade da disciplina de Programação para Dispositivos Móveis.

## Funcionalidades 

* Cálculo com as 4 operações básicas (soma, subtração, multiplicação e divisão)
* Cálculo do Delta e da Fórmula de Bhaskara
* Cálculo de IMC
* Cálculo de Triângulo (isósceles, escaleno e equilátero)
* Temporizador Básico
* Temporizador Pomodoro
* API que busca e atualiza, a cada refresh, imagens de gatinhos
* API que busca o endereço pelo CEP fornecido
* API que realiza CRUD de alunos

## Tecnologias utilizadas

* React Native
* Expo
* JavaScript

## Como executar o projeto 

1. Clone o repositório: git clone *https://github.com/aimeeaas/calculadora-temporizador.git*
2. Acesse a pasta do projeto: **cd calculadora-temporizador**
3. Instale as dependências: **npm install**
4. Inicie o projeto: **npx expo start**
5. Abra no celular utilizando o aplicativo **Expo Go** ou em um emulador.
   
## Como executar o Backend da API de alunos 

1. Acesse a pasta backendApi e inicie o Node.js: **npm init -y**
2. Instale as dependências: **npm install express e npm install cors**
4. Inicie o servidor: **node index.js**
5. Resultado esperado: Servidor rodando em **http://localhost:3000**

## Observações
A API de alunos funciona normalmente no navegador web e em emuladores. <br>
Caso utilize um celular físico com Expo Go, será necessário substituir localhost pelo IP da máquina local.
