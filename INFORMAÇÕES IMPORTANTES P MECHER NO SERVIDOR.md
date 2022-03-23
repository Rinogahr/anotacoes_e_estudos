########################################################################### 				RERSTARTA O SERVIDOR ###########################################################################

1º NO CMD DIGITE -> ssh -p20200 josuel@ntdsoft.net
2º COLOQUE O PASSWORD -> Joj@_95751966 (OBS. o cmd não mostra nada quando digita ou cola a senha).
3º DIGITE -> sudo su
4º COLOQUE A SENHA NOVAMENTE -> Joj@_95751966 (OBS. o cmd não mostra nada quando digita ou cola a senha).
5º DIGITE -> systemctl restart httpd.service/



###### UPANDO O PoRTAL NO SERVIDOR #####
1º NA PASTA FRONTEND execultar => npm run build
2º COPIE TODOS OS ARQUIVOS GERADOS NA PASTA *BUILD* E COLE NA PASTA *FRONTEND* QUE FOI CRIADO DENTRO DO SEU *BACKEND e NO CMD EXECULTAR O COMANDO npm run gitL* 
3º EM UM NOVO TERMINA(CMD) EXECULTAR OS COMANDOS *SSH* (*ssh -p20200 ###SEU-login(root@ntdsoft.net)###*) DEPOIS COLOCAR SUA SENHA(OBS. A SENHA NÃO APRECE TOME CUIDADO AO DIGITAR PARA NÃO ERRAR.) PARA NAVEGAR NO DIRETÓRIO DIGITE ***CD /***
4º ENTRE NO DIRETORIO QUE DESEJA *EXEMPLO* CD => portaisntd  CD => servidorPortalProfessorntd (CASO QUERIA VISUALIZAR A LISTAGEM DO QUE EXISTE NO SERVIDOR USE ls)
5º JÁ DENTRO DA PASTA EXECULTE  O COMANDO *npm run gitS* ELE SOLICITARAR LOGIN E SENHA DO USUARIO PARA TER CERTEZA DE QUE TEM PEMISSÃO E TENDO ENVIARÁ TUDO PARA O SERVIDOR.

### EXTRA ###
PARA ACESSAR O PORTAL HOJE VC PRECISA DIGITAR NO SERVIDOR *ntdsoft.net:8898/portal*.

### COMANDOS IMPORTANTES PARA MECHER NO SERVIDOR ###
