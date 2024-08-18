# Food-Commerce

Bem-vindo ao Food-Commerce! Este é um projeto de e-commerce desenvolvido para fazer pedidos de comida.

## Visão Geral

O Food-Commerce é uma plataforma para pedidos de fast-food online, proporcionando uma experiência prática e eficiente. Oferece soluções abrangentes para facilitar a experiência de compra.

## Funcionalidades

Catálogo de Produtos
Categorias
Detalhes de Produtos
Adicionar ao Carrinho
Atualizar Carrinho
Finalizar Compra
Checkout
Gerenciamento de Pedido
Suporte ao Cliente

## Tecnologias Utilizadas

Linguagens de Programação: _TypeScript_, _HTML_, _CSS_
Framework: _React_
Banco de Dados: _Docker + PostgreSQL_
Outras Tecnologias: _Sistema de Validação_, _Asaas (Gateway de Pagamento)_

## Configuração do Ambiente de Desenvolvimento

Siga estas etapas:

Faça o download do repositório

Em seu ambiente de desenvolvimento

**BACK-END:**

```bash
cd food-commerce-backend
```

Instale as Dependências:

```bash
npm install
```

Abra o Docker Desktop

Suba o banco:

```bash
docker-compose up -d
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

Acesse o sistema e assim que carregar, o sistema será exibido no seu navegador padrão.
