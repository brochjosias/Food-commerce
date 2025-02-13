# Food-Commerce

Bem-vindo ao Food-Commerce! Este é um projeto de e-commerce desenvolvido para restaurantes fast-food.

## Visão Geral

O Food-Commerce foi criado para tornar suas refeições ainda mais acessíveis. É uma plataforma de pedidos online de fast-food, pensada para oferecer conveniência e rapidez, desde a escolha do seu prato favorito até a finalização do pedido. Tudo para facilitar a sua vida e garantir uma experiência de compra simples e agradável.

## Funcionalidades

- Catálogo de Produtos
- Categorias
- Detalhes de Produtos
- Adicionar ao Carrinho
- Atualizar Carrinho
- Finalizar Compra
- Checkout
- Gerenciamento de Pedido
- Suporte ao Cliente

## Tecnologias Utilizadas

- React
- TypeScript
- HTML
- CSS
- Docker
- PostgreSQL
- Asaas (Gateway de Pagamento)

## Faça o download do repositório e em seu ambiente de desenvolvimento:

**BACK-END:**

```bash
cd food-commerce-backend
```

Instale as Dependências:

```bash
npm install
```

Abra o Docker Desktop e em seguida Suba o banco em seu ambiente:

```bash
docker-compose up -d
```

Crie o seu servidor no Postgres com os dados que constam no package.json:

```bash
Verifique se o banco "develop" foi criado
```

Migre o Prisma para o banco:

```bash
npm run db
```

Inicie o Back-end:

```bash
npm run dev
```

**FRONT-END:**

```bash
cd food-commerce
```

Instale as Dependências:

```bash
npm install
```

Inicie o Front-end:

```bash
npm run start
```

Assim que carregar, o sistema será exibido no seu navegador padrão.
