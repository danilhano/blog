# Blog

Este é um projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 6.0.8.
Utilizei o comando `ng new blog --style=sass` para gerar a estrutura do projeto configurado com o SASS.
O objetivo deste projeto é criar uma tela para listar os títulos dos posts para o usuário, além de exibir informações complementares (nome, email) do autor, conforme clique (vínculado ao userId) no título do post.

Estou consumindo os dados da API: `http://jsonplaceholder.typicode.com/`.

## Como rodar a aplicação em modo de desenvolvimento?

Abra o terminal e execute o comando `ng serve -o`. Pronto, em alguns segundos o navegador ira abrir automaticamente no endereço `http://localhost:4200/`. Agora é a parte mais legal, qualquer alteração que for realizada será refletida no navegador em tempo de execução.

## Scaffolding: Como gerar novos componentes?

Execute o comando `ng generate component component-name` e um novo componente será gerado. Você pode utilizar outros parametros `ng generate directive|pipe|service|class|guard|interface|enum|module`. Se quiser pode abreviar o comando utilizando: `ng g c component-name`.

## Build: Como gerar o pacote da aplicação (dev e prod)?

Execute o comando `ng build` gerar o pacote de desenvolvimento. Será gerada uma pasta com o nome `dist/` que contém os arquivos necessários para rodar a aplicação. Utilize a flag `--prod` gerar uma versão otimizada para produção. Ou seja, execute o comando `ng build --prod`.

## Como executar os testes unitários?

Execute o comando `ng test`, então o [Karma](https://karma-runner.github.io) vai rodar os testes e abrir o navegador para apresentar o resultado.

## Como executar os testes de integração ou end-to-end (e2e)?

Execute o comando `ng e2e`, então o [Protractor](http://www.protractortest.org/) vai rodar os testes e abrir o navegador para apresentar o resultado.

## Apredendo mais sobre o Angular CLI

Execute o comando`ng help` e saiba mais sobre o Angular CLI. Você também pode consultar o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
