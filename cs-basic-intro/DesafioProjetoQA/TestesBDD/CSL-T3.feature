Feature: Cliente recém-cadastrado tenta adicionar um produto ao carrinho
    @TestCaseKey=CSL-T3
    Scenario: Cliente recém-cadastrado tenta adicionar um produto ao carrinho
        
        Given que o cliente esteja na tela de um produto selecionado
        And e seja um cliente recém cadastrado
        When Clicar no botão para adicionar porduto ao carrinho
        Then irá visualizar o incremento no número no ícone do Carrinho de Compras