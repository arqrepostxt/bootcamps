function ListDtype({itens}) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {/* Comentário: Uso de operador ternário a>=b ? exp1 : exp2 */}
            {itens.length > 0 ? (

                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                    ))
                    ) : (
                        <p>Não há itens na lista</p>
                    )
                }
        </>
    )
}


export default ListDtype