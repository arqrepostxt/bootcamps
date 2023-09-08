import Button from './Button'

function Evento() {

    function meuEvento() {
        console.log(`Acionando o 1º primeiro evento`)
    }

    function segundoEvento() {
        console.log(`Acionando o 2º segundo evento`)
    }

    return (
        <div>
            <p>Clique para confirmar :</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />

        </div>
    )
}

export default Evento