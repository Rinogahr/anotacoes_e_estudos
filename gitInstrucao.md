### COMO CRIAR REPOSITORY NO GIT

{*ESSES PROCEDIMENTOS SÃO FEITOS PARA CRIAR REPOSITORY'S UTILIZANDO O GIT*{
        1º - crie uma pasta e em seguida abra o diretório apontando para essa pasta,
          2º - digite *git init* para criar um repositório do git[.git] dentro da pasta.
           3º - depois digite *git add .* para adicionar as alterações feitas para dentro do [.git].
             3º - em seguida digite *git commit -m "seu comentário aqui"* para realizar um commit.
               4º - vá na sua conta (**GitHub** caso não tenha, crie uma e depois faça os procedimentos).
                 5º - crie um repository onde o **GitHub** irá mostra uma [url] exemplo.. [https://github.com/usuario/nomeRepository.git].
                   6º - execute o comando *git remote add origin https://github.com/usuario/nomeRepository.git* para direcionar o [.git] para o repositório criado lá no **GitHub**.
                     7º - em seguida faça **git push -u origin [nome da branche]**.
                      (Obs. o [nome da branche] é aprensentado quando vc cria um repository lá no **GitHub**, mais informações na linha [14] desse arquivo de instrução ).
    }
}**O QUE É BRANCHE ?**{
    *branche são ramificações de um mesmo repository, é utilizado para projetos onde existem mais pessoas trabalhando nele, ao envies de enviar para o repository principal cada pessoa pode criar uma branche em seu ambiente local e com isso trabalhar sem precisa atualizar a branche principal.*
    ###EXEMPLO -> {se eu criar um repository e nela criar uma [branch] com o de *producao* e enviar as alterações que fiz no repository, será enviada para essa [branche], se outra pessoa tiver permissão e também fizer alterações quando ela enviar também será para a [branche] principal podendo bagunçar e confundir tudo, mas se a tiver outra [branche] [dev-por-exemplo] todos podem enviar para essa [branche-secundária] e só quem tem permissão irá pode enviar elas para a [branche-principal] IREI EXMPLIFICAR MELHOR LOGO ABAIXO.  }

}**COMO CRIAR BRANCHES**{
    assim que vc cria um repository lá no **GitHub** notará que já existe uma [branche] criada [master] ou [main], então faça esse passo a passo para criar uma segunda [branche]...
#######
    1º - no seu terminal apontando para o repository desejado execute o comando **git checkout -b [nome-da-nova-branche]**.
      2º - execute o comando **git init** para criar um repositório [.git] nessa segunda [branche].
        3º - execute o comando **git add .** para adicionar as alterações feitas para dentro do [.git] dessa segunda [branche].
          4º - execute o comando *git commit -m "seu comentário aqui"* para realizar um commit nessa segunda [branche].
            5º - execute o comando **git push -u origin [nome da branche]** para enviar as alterações dessa segunda [branche] para o **GitHub**.
##### - PRONTO COM ISSO VC CRIOU UMA NOVA BRANCHE E ADICIONOU TODAS AS ALTERAÇÕES CONTIDAS NELA NO REPOSITORY DA SUA CONTA NO GITGUB, MAS SE VC FOR NA BRANCHE PRINCIPAL NOTARÁ QUE NÃO EXITE O COMMIT QUE VC FEZ E NEM AS ALTERAÇÕES FEITAS NO PROJETO, ISSO POR QUE TODAS AS ALTERAÇÕES FORAM FEITAS NA NOVA BRANCHE[BRANCHE-SECUNDARIA] E PRARA JOGAR TODAS AS ALTERAÇÕES PARA A [BRANCHE-PRINCIPAL] TERÁ QUE EXECUTAR OS COMANDOS A SEGUIR..

**ENVIANDO AS ALTERAÇÕES DE UMA BRANCHE PARA OUTRA**{
    1º - acesse a [branche] que deseja utilizando o comando **git checkout [branche-primaria]**.
      2º - execute o comando **git mergin [branche-secundaria]** para pegar as alterações existentes da [branche-secundaria] e enviar para [branche-primaria].
        3º - execute o comando **git add .** para adicionar as alterações feitas para dentro do [.git].
          4º - execute o comando *git commit -m "seu comentário aqui"* para realizar um commit.
            5º - execute o comando **git push -u origin [nome da branche]** para enviar as alterações para o **GitHub**.
 }

}

*COMANDOS BASICOS DO GIT*{
  (**echo**) "# BrothersStartUp" >> README.md
  (**git init**): cria um repository [.git] dentro da pasta solicitada.
  (**git add .**): adiciona as alterações dentro do [.git].
   {Obs.. *vc pode usar o git add [nome-do-arquivo] para enviar apenas as alterações feita em um arquivo especifico ou pode utilizar o comando (git add .) para enviar todas as alterações existentes*}.
  (**git commit -m "comentários dentro de aspas duplas"**): ira adicionar o seu comentário a essas alterações feitas.
  (**git branch -M [nome_da_brach]**):  ira entrar na [BRACH] desejada.
  (**git remote add origin [url]**): para direcionar o [.git] para o repositório criado lá no **GitHub**
  (**git push -u origin [nome-da-branche]**): envia as alterações feitas para o repository criado lá no **GitHub**.   
}

*COMANDO CASO PRECIDE MUDAR O NOME DA BRANCH*{
  (**git branch -m [nome-da-brache-antiga] [nome-novo-da-brache]**)
  (**git fetch origin**)
  (**git branch -u origin/prod prod**)
  (**git remote set-head origin -a**)
}