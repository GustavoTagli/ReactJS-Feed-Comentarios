## Seção de Comentários

Este é um aplicativo React que permite aos usuários enviar comentários por meio de um formulário. Os comentários são exibidos abaixo do formulário na ordem em que foram enviados, mostrando o email do remetente, a data de envio e o conteúdo do comentário.

### Componente App

O componente `App` é o componente principal da aplicação. Ele gerencia o estado dos comentários, do email e do texto do comentário por meio dos hooks `useState`. Quando um comentário é enviado, o método `sendComment` é chamado para atualizar o estado dos comentários com um novo comentário, incluindo um ID gerado aleatoriamente e a data de criação.

### Componente Input

O componente `Input` é um componente reutilizável que representa um campo de entrada de dados no formulário. Ele recebe as seguintes propriedades:

- `type`: Define o tipo de entrada (`input` para campos de email e `text-area` para campos de comentário).
- `id`: O identificador do campo de entrada.
- `label`: O rótulo que descreve o campo de entrada.
- `value`: O valor atual do campo de entrada.
- `setValue`: Uma função para atualizar o valor do campo de entrada.

### Formulário

O formulário é composto por dois componentes `Input` para capturar o email e o texto do comentário. Quando o botão "Enviar comentário" é clicado, a função `sendComment` é chamada para adicionar um novo comentário à lista de comentários.

### Exibição de Comentários

A seção de comentários é representada pelo componente `div` com a classe "comments". Se não houver comentários na lista, uma mensagem "Seja o primeiro a comentar!" é exibida. Caso contrário, a lista de comentários é mapeada, e cada comentário é exibido em um bloco separado contendo o email do remetente, a data de envio e o conteúdo do comentário.

Este aplicativo permite uma interação simples e direta para que os usuários possam compartilhar seus comentários de forma prática e rápida.
