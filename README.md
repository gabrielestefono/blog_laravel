# 1. Visão Geral do Projeto

## Propósito: 

Desenvolvido como um desafio técnico, este blog serve como uma ferramenta de aprendizado e demonstração de habilidades em desenvolvimento web.
O desafio em questão é construir uma aplicação qualquer.
Escolhi um blog de um layout que encontrei na comunidade Figma:

![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/7b971759-3272-4385-8aae-bc4b92fd7e55)

Segue o link para desenvolvedores que quiserem:
https://www.figma.com/community/file/1216616090937021365/free-blog-template-modern-creative-design

## Backend: Tecnologias Utilizadas:

Laravel, Filament foram escolhidos por sua facilidade de aplicação, velocidade de desenvolvimento e familiaridade.

#2. Arquitetura do Sistema

## Estrutura do Laravel: MVC (Model-View-Controller): Utilização do padrão MVC com:

### Models:

Para interação com o banco de dados.

### Views:

Desenvolvidas com React, proporcionando uma interface de usuário interativa.

### Controllers:

Gerenciando a lógica de negócios e a interação entre Models e Views.

## Banco de Dados

### MySQL:

Escolhido pela facilidade de desenvolvimento e modelagem em um curto período de tempo, além de possibilidade de visualização em um esquema EER Diagram.
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/840ae637-3e09-47a1-8822-c766f1e18a87)

## 3. Painel Administrativo (Filament)
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/073e8e48-8bcb-48bd-a42e-0c2dfbadbe0b)

### Funcionalidades:

* Criação de Usuários: Permite a administração de usuários do sistema.
* Criação de Postagens: Interface para publicar e gerenciar postagens.
* Criação de Categorias: Facilita a organização das postagens em diferentes categorias.

## 4. Personalizações e Componentes Adicionais

### Filament:

Sem personalizações específicas foram implementadas.

## Desenvolvimento Front-end: Tecnologias Utilizadas:

### React.js:

Utilizado para criar a interface do usuário do blog.
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/0e8128af-97ea-45f0-8839-adb78ca77114)
Que inclui também um modo dark:
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/90eee6e4-dd3b-41b2-a181-637c42e2c8f9)

### SCSS (SASS):

Empregado para estilizar os componentes de front-end, proporcionando maior flexibilidade e organização do código CSS.

### Responsividade
Abordagem de Design: O projeto foi desenvolvido especificamente para desktop, sem uma estratégia de design responsivo, será feito no futuro a responsividade.

## 6. Segurança e Performance:

### Medidas de Segurança

Utilização das medidas de segurança integradas do Laravel, incluindo proteção contra CSRF.

### Otimizações de Performance

Abordagem de Desenvolvimento: Estratégias específicas de otimização de performance, como caching ou minificação de arquivos, não foram implementadas ainda.

## 7. Deploy e Manutenção

Processo de Deploy: O projeto não foi implantado em um ambiente de produção; está armazenado apenas no GitHub.

# 8 - Visão Geral do Projeto.
Página inicial atraente, será o primeiro contato do leitor:
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/842bf2a3-c966-4ad3-b0d4-497d5f5bd7aa)

Página Blog, onde todas as postagens são listadas:
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/d69a4106-433e-4223-9caf-ac0c44cd5538)

Página Sobre, que conta um pouco sobre cada escritor e mostra as últimas noticias deles.
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/c5194b6b-b5b2-4434-8acf-e565c9352bac)

Ao clicar no nome de um autor, em qualquer parte do site, será redirecionado para a página do autor, que contém somente os posts dele e suas informações básicas:
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/9ebedb8b-649a-4611-bdb6-0405cdf698ca)

Ao clicar em uma noticia, será aberta a página da noticia:
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/2b262bb6-4934-4773-ac44-b62a52c25045)

No header, é possível fazer uma busca por nome de noticia, o que levará o usuário a uma página com o resultado das buscas:
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/72508559-3a2f-428d-977c-7c62f4a68b0c)

No footer existem as categorias de noticias, onde o usuário pode filtrar as noticias.
![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/f8f4d52d-a8a8-43ec-b443-80168bbd1938)

![image](https://github.com/gabrielestefono/blog_laravel/assets/104292192/47f86043-df92-4a55-85b3-8475fb5e3868)

# 9 - Como rodar o projeto?
## Requisitos
Como requisito, é necessário ter em sua máquina:
* php8.2 ou superior instalado
* Node.js
* Composer
* MySQL

## Como rodar?
Ao fazer o clone do repositório, com os requisitos instalados, abra o projeto no terminal, no root digite os seguintes comandos:
* composer install (instalará as dependências do PHP)
* npm install (instalará as dependências do Node)

Será necessário criar um novo banco de dados no MySQL com o nome que preferir
Deverá renomear o .env.examples para .env e ajustar os dados:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=blog
DB_USERNAME=root
DB_PASSWORD=
Para os dados do seu banco de dados

Após feito isso, precisará rodar os comandos no mesmo terminal de antes (ou um novo na mesma pasta).
* php artisan key:generate (irá gerar uma chave no .env)
* php artisan migrate (irá gerar as tabelas necessárias no banco de dados)
* php artisan make:filament user. (Criará um novo usuário no painel administrativo)
    * Irá pedir o nome de usuário (pode ser fictício)
    * Irá pedir um email (pode ser fictício)
    * Irá pedir uma senha.
* php artisan serve (irá servir a aplicação no link http://localhost:8000)

Abra outro terminal na mesma pasta e digite *npm run build* para gerar um html estático
