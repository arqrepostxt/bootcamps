import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Rolex" ano_fundacao={1905}/>
                <Item marca="Ferrari" ano_fundacao={1947}/>
                <Item marca="Patek Philippe" ano_fundacao={1839}/>
                <Item marca="Zenith" ano_fundacao={1865}/>
                <Item marca="Jaeger-LeCoultre" ano_fundacao={1833}/>
            </ul>
        </>
    )
}

export default List