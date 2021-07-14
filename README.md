# Como rodar o projeto?

Primeiro de tudo, é necessário ter o Node.js (<https://nodejs.org/en/>) instalado na sua máquina, com ele irá vir um instalador de pacotes, o _npm_, que iremos usar para instalar as dependências do React.

## Instalando dependências

Para instalar as dependências, basta seguir os seguintes passos:

- Vá para a pasta raiz do projeto
- Rode o comando no terminal `npm install` e espere o `npm` terminar a instalação

## Executando o projeto

Ao terminar a instalação, para executar o projeto, basta seguir os seguintes passos:

- Primeiro, crie um arquivo chamado _.env_ na raiz do projeto, e dentro desse arquivo, coloque:
  - `REACT_APP_API`=<https://coletum.com/api/graphql>
- Logo após ter criado o arquivo, abra o terminal e execute o comando `npm run start`.

# Tomada de decisões para a solução do desafio

1. Foram utilizados algumas ferramentas para manter o padrão de um código, como `Prettier` e `ESLint`, para manter o padrão _airbnb_ no código.
2. Para consumir os dados da API, como ela é feita em `GraphQL`, foi configurado e utilizado o `Apollo Client` (<https://www.apollographql.com/docs/react/>) e seus _hooks_.
3. O layout foi feito com o `Material UI` (<https://material-ui.com/>) para auxiliar na estilização dos componentes.
4. Foram utilizados os conceitos de _dictionary_ para deixar o formulário o mais genérico possível, independendo de um tipo fixo do _form_.
5. Como nunca tinha mexido com GraphQL e Apollo Client, não encontrei uma maneira de renomear as váriaveis utilizando essa biblioteca, e como o tempo estava ficando curto, acabei utilizando alguns helpers para fazer a formatação.
