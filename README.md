# Portfolio React com Next.js 13

Front-end completo para portfólio com [Next.js 13](https://nextjs.org/docs) e [Strapi CMS](https://docs.strapi.io/). Ele foi desenvolvido para o conteúdo da [Master Class #19](https://www.youtube.com/@DevSamurai) da [Dev Samurai](https://devsamurai.com.br).

## Como funciona

Este é um exemplo de como podemos criar um portfólio React com o [Next.js 13](https://nextjs.org/docs) utilizando o [Strapi](https://docs.strapi.io/) como CMS Headless.

## Como executar

Clone  o projeto na sua pasta de desenvolvimento:

```sh
git clone git@github.com:DevSamurai/react-portfolio-next.git
```

E acesse a pasta do projeto frontend e execute o seguinte comando:

```sh
cd react-portfolio-next/frontend
npm install
npm run dev
```

Abra outro terminal, e também execute o processo para o Strapi CMS:

```sh
cd react-portfolio-next/backend
docker-compose up -d
npm install
npm run develop
```

### Importação de dados no Strapi

Para importar os dados com informações de exemplo, basta executar o comando:

```shell
cd backend
npm run strapi import -- -f ../docs/strapi-export.tar.gz
```

Referências: <https://docs.strapi.io/dev-docs/data-management/import>

## Como acompanhar o meu trabalho

Se você curtiu esse conteúdo, vai curtir também minha newsletter, inscreva-se em <https://st.devsamurai.com.br/f7tvr6rx/index.html>
