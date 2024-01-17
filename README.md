# Food-commerce

Bem-vindo ao Food-commmerce! Este é um projeto de e-commerce desenvolvido para fazer pedidos de comida.

Visão Geral: O Food-commerce é um sistema pedidos de fast-food online. Ele oferece uma variedade de funcionalidades, incluindo a gestão de produtos, categorias, gerenciamento de pedidos, entre outros.

Funcionalidades: Catálogo de Produtos, Categorias, Detalhes de Produtos, Adicionar ao Carrinho, Atualizar carrinho, Finalizar Compra, Checkout, Gerenciamento de Pedido, Suporte ao Cliente.

Tecnologias Utilizadas: Linguagens de Programação: Node.js, TypeScript; Frameworks: Express, React; Banco de Dados: Docker + PostegreSQL; Outras Tecnologias: Sistema de validação + Asaas (Gateway de Pagamento).

Configuração do Ambiente de Desenvolvimento, siga estas etapas:

Faça o download do repositório;

Em seu ambiente de desenvolvimento:

--BACK-END: cd food-commerce-backend;

Instale as Dependências: npm install;

Abra o Docker-desktop;

Suba o banco: docker-compose up -d;

Migre o prisma para o banco: npm run db:migrate;

Inicie o Back-end: npm run dev.

--FRONT-END: cd food-commerce;

Instale as Dependências: npm install;

Inicie o Front-end: npm run start;

Assim q carregar aparecerá o sistema seu navegador padrão.
