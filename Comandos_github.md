### Lista de comandos úteis do GIT ###

{
  Lista de comandos úteis do GIT para usar atraves do **CMD** Obs. Muito cuidado ao usar para não ocorrer erros.
}

*** GIT ***
*** Estados ***
*** Modificado (modified); ***
*** Preparado (staged/index) ***
*** Consolidado (comitted); ***
*** Ajuda ***
*** Geral ***
*** git help ***
*** Comando específico ***
*** git help add ***
*** git help commit ***
*** git help <qualquer_comando_git> ***
*** git help <qualquer_comando_git> ***



*** iniciar uma área de trabalho ***
   clone             ### Clone um repositório em um novo diretório ###
   init              ### Crie um repositório Git vazio ou reinicialize um existente ###

*** trabalhar na mudança atual ***
   add               Adiciona o conteúdo do arquivo ao índice
   mv                Mover ou renomear um arquivo, diretório ou link simbólico
   restore           Restaurar arquivos da árvore de trabalho
   rm                Remove os arquivos da árvore de trabalho e do índice
   sparse-checkout   Inicializa e modifica o sparse-checkout

*** examine o histórico e o estado ***
   bisect            Use a pesquisa binária para encontrar o commit que introduziu um bug
   diff              Mostra mudanças entre commits, commit e árvore de trabalho, etc
   grep              Imprimir linhas que combinam com um padrão
   log               Mostrar logs de confirmação
   show              Mostra vários tipos de objetos
   status            Mostra o status da árvore de trabalho

*** crescer, marcar e ajustar sua história comum ***
   branch            Listar, criar ou excluir branches
   commit            mudanças de registro para o repositório
   merge             Junte dois ou mais históricos de desenvolvimento juntos
   rebase            Reapply commits em cima de outra base tip
   reset             Redefina o HEAD atual para o estado especificado
   switch            Mudar ramos
   tag               Criar, listar, excluir ou verificar um objeto de tag assinado com GPG

*** colaborar (see also: git help workflows) ***
   fetch             objetos de download e referências de outro repositório
   pull              buscar de e integrar com outro repositório ou um branch local
   push              Atualizar referências remotas junto com objetos associados

git help -a' e 'git help -g' listam os subcomandos disponíveis e alguns
guias de conceito. Veja 'git help <command>' ou 'git help <concept>'
para ler sobre um subcomando ou conceito específico.
Veja 'git help git' para uma visão geral do sistema








*/*
@media (max-width:790px){
        select, input{
            font-size:10px;
        }
        .wrap790{
            flex-direction:column;
        }
    }
    @media (max-width:360px){
        .wrap360{
            flex-direction:column;
        }
        input{
            width:calc( 100% - 10px ) !important;
        }
    }
*/*


