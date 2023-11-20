# Projeto Driven n° 18: Freela ?

  O atual projeto é uma aplicação Full Stack, com banco de dados incluso, desenvolvido no curso de formação da Driven Education. A aplicação é uma rede social baseada em sites como Facebook e Instragam. As principais funcionalidades implementadas foram: cadastro e login de usuarios, login como visitante, cadastro de animais de estimação, visualização dos pets registrados, barra de pesquisa de outros animais e possibilidade de deixar os dados do seu animal de estimação como públicos ou privados para demais usuários. A principal tecnologia utilizada no front-end é o  React Vite, utilizando a biblioteca Axios para fazer requisições para a API.
  
  Se quiser experimentar as funcionalidades sem baixar localmente o código pode utilizar o link abaixo para acessar o deploy da API: 
  
  **[🚀 Link do Deploy](https://projeto18-freela-front-lilac.vercel.app/)**


## 📖 Índice
1. Visão Geral
2. Tecnologias
3. Banco de dados
4. Rotas
5. Como instalar ?
6. Como testar ?

## 📋 Visão Geral 


## 🛠️ Tecnologias
<table>
  <tr>
    <td align="center">
      <a href="[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html](https://pt.vitejs.dev/guide/)">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--bsGEKH1C--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cm21q6iefpnmz3railfs.png" width="100px;" alt="Ícone Vite"/><br>
        <sub>
          <b>React Vite</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="[https://nodejs.org/en/about](https://axios-http.com/docs/intro)">
        <img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Axios.Js</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
   
## 🚏 Rotas

### /:
  Página principal da aplicação onde o usuario entra pela primeira vez que acessa o site. Ele permite que o usuário efetue login caso não exista token salvo. O usuário pode opitar também por entrar como visitante clicando no logotipo, porém isso não dará acesso a todas as rotas do site.

### /register:
  Página de registro doo site, local onde o usuário pode indica suas informaççoes pessoais para fazer se cadastro e poder acessar todas as funcionalidades do site.

### /home:
  Página principal do site, local onde o usuario será redirecionado após fazer o login. É nessa página que o usuario vê os últimos pets cadastrados no banco.

### /user:
  Página de informações do próprio usuario, local onde ele consegue enxergar sua foto de perfil e suas informações de contato.

### /search:
  Página de busca do site que permite o usuario pesquisar palavras-chaves. Os resultados da busca são exibidos abaixo da barra de pesquisa.
  
### /my:
  Página de informações dos animais registrados pelo usuario, local onde ele pode deixar seus pets visiveis ou não para outros clientes.

### /pokemon/:id :
  Página de informação de cada animal individualmentem, dependendo do id presente no link da página. É nessa página que o usuario pode ver as informções de contato de cada animal e sua descrição.

### /* (página de erro):
  Página padrão de erro exibida todas as vezes que um cliente tenta acessa uma rota que não foi implementada.
   
## ⚙️ Como instalar ?

- Para instalar e rodar localmente no seu computador o atual projeto é necessário ter instalado o client Mongo, para criar localmente o banco de dados de deploy, e a API rodando. Caso seu computador esteja dentro dos requisitos, os passos para instalar o programa são:

1. Baixe o repositório no seu computador de descompacte ele.
2. Abra em um programa capaz de roda-lo, como por exemplo o visual studio.
3. No terminal, insira o comando abaixo para instalar as dependências:
```javascript
npm i
```
4. Logo após, configure as variavés de ambiente criando os arquivos .env e .env.test. Para essa etapa funcionar corretamente é necessário subistituir as informações presentes por aquelas referentes a sua configuração.
```javascript
VITE_API_URL = Variável responsável por deifnir qual o link da API que o site irá acessa quando for buscar informações.
```
Pronto, agora o código já está instalado e pronto para ser executado.

## 🏎 Como testar ?

- Para testar localmente o código você precisa fazer a aplicação rodar. execute o comando abaixo:
```javascript
npm run dev
```

Com a aplicação rodando em sua máquina, acesse o link informado para poder testar as funcionalidades da aplicação.
