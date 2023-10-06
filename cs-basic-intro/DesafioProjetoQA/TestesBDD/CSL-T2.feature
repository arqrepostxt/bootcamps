Feature: Cliente sem cadastro tenta adicionar um produto ao carrinho
    @TestCaseKey=CSL-T2
    Scenario: Cliente sem cadastro tenta adicionar um produto ao carrinho
        
        Given que o cliente esteja na tela de um produto selecionado
        And e não tenha cadastro
        When Clicar no botão para adicionar porduto ao carrinho
        Then irá visualizar o incremento no número no ícone do Carrinho de Compras