# API, REST e RESTFUL

## API
Cliente (Client/Usuário)
Garçon (pedidos, levar seus pedidos, para a cozinha) (API)
Cozinha (Server/Servidor)

## O QUE É [API] ?
[*Acrônimo*] de Application Programing Interface{ Interface de Programação de Aplicações }
é basicamente um conjunto de rotinas e padões estabelecidas por uma aplicação, para que outras
aplicações possam utilizar as funcionalidades desta aplicação.

 - Ela é responsavel por estabelecer comunicação entre diferentes serviços.
 - Meio de campo entre as tecnologias.
 - Intermediador para troca de informações.
#

 ## REST

 Restaurante
 Limpinho,
 Que te atenda bem,
 Te dê aquilo que você pediu.

 Cliente
 Gritando,
 Xingando

#	[BOAS-PRATICAS]

 ## O QUE É [REST] ?
 Um [*Acrônimo*] para Representational State Transfe { Transferência de Estado Representativo }.

Será feita a transferência de dados de uma maneira simbólica,
figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo *HTTP*.

O [Rest], delimita algumas obrigações nessas transferências de dados.

*Resources seria então, uma entidade, um objeto.*

### 6 NECESSIDADES (constraints) para ser [RESTful].

- _Client-Server_: Seperação do [cliente] e do [armazenamento]
de dados ([servidor]), dessa forma, podemos ter uma
portabilidade donosso sistema, usando o _React_ para WEB e _React-Native_
para o smartiphone, por exemplo.

- _Stateless-[SEM_ESTADO]_: Cada requisição que o [cliente] faz para o
[servidor], deverá conter todas as informações necessárias 
para o servidor entender e reponder (RESPONSE) a requisição (REQUEST).
# [EXEMPLO]: A sessão do usário deverá ser enviada
# em todas as requisições, para saber se aquele usuário está
# autenticado e apto a usar os serviços, e o servidor não pode
# lembrar que o cliente foi autenticado na requisição anterior.
# Nos nossos cursos, temos por padrão usar [token] para as comunicação.

- _Cacheable_: As respostas para uma requisição, deverão ser
explicitas ao dizer se aquela requisição, pode ou não ser
cacheada pelo cliente.

- _Layered System_: O [cliente] acessa a um *endpoint(http://exemplodeapi.com/exemploEndPoit?endpoint)*,
sem precisar saber da complexidade, de quais passos estão sendo
necessários para o servidor responder a requisição, ou quais
outras camadas o servidor estaár lidando, para que a
requisição seja respondida.

- _Code on demand (OPCIONAL)_: Dá a possibilidade da nossa
aplicação pegar códigos, como o [JavaScript], por exemplo, e 
executar no cliente;

## RESTFUL

# [RESTful], é a aplicação dos padões REST

## BOAS PRATICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints?
_NÃO IMPORTA_ use um padrão !!.
- Não deixar barra no final do endpoint
- Nunca deixe seu cliente sem resposta!

## VERBOS HTTP

# GET : RECEBER DADOS DE UM RESOURCE.
# POST : ENVIAR DADOS OU INFORMAÇÕES PARA SEREM PROCESSADOS POR UM RESOURCE.
# PUT : ATUALIZAR DADOS DE UM RESOURCE.
# DELETE : DELETAR UM RESOURCE.


### STATUS DAS RESPOSTAS

- 1XX: Informação
- 2XX: Sucesso
    - 200: OK
    - 201: CREATED
    - 1XX: Não tem contéudo PUT POST DELETE
- 3XX: Redirection
- 4XX: Client Error
    - 400: Bad Request
    - 404: Not Found!
- 5XX: Server Error
    - 500: Internal Servewr Error