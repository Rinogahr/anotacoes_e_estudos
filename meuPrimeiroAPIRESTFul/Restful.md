## CRIANDO UMA API REST/RESTFUL

- _Crie um projeto_ (nesse exemplo usaremos o node.js e o express) [comando-para-criação]
## npm init *-y* ou yar init *-y* (o *-y* é opcional, caso use, ele não irá realizar as perguntas padrões como por exemplo o nome do projeto), ele criará um arquivo [packeg.json] com as informações necessárias do seu projeto [back-end].

- _Execulte o comando_ npm add express ou yar add express, para adicionar o [EXPRESS] ao seu novo projeto,
note que ele irá criar um arquivo *package-lock.json* caso vc execulte o [npm],
ou um arquivo *yarn.lock* caso execulte o [yar] ambos faram o mapeamento das dependencias para o seu projeto,
uma pasta [node_modules] onde irá conter todas as [dependencias-do-seu-projeto] inclusive as dependencias do [EXPRESS]

- _Crie um arquivo servidor_ [exemplo] servidor.js, será o arquivo utilizado como servidor.

## crie uma constante e importe o [EXPRESS] [EXEMPLO] (const express = require('express'))
## em seguida associe ele a uma outra cosntante para utilizar na hora
## da execulção por [EXEMPLO] (const app = exoress())
## depois utilise o [listen] para criar uma conexão com seu servido utilizando uma função de [endPoit]
## [EXEMPLO] (app.listen(3000), ()=>{}) *(_3000: é a porta que o servidor irá usar_)(_,: sepoaração da porta com o segundo parametro_)( functio) *