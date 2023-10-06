Feature: Cliente com cadastro tenta adicionar um produto ao carrinho
    @TestCaseKey=CSL-T1
    Scenario: Cliente com cadastro tenta adicionar um produto ao carrinho
        
        Given que o cliente esteja na tela de um produto selecionado
        And e esteja logado(realizou login)
        When Clicar no botão para adicionar porduto ao carrinho
        Then irá visualizar o incremento no número no ícone do Carrinho de Compras