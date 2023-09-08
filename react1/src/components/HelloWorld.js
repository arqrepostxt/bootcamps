import Frase from "./Frase"

function HelloWorld() {
    return (
        <div>
            <h1>Componente de saudação da aplicação</h1>
            <Frase />
            <Frase />
        </div>
    )
}
console.log('Rodando aplicativo')

export default HelloWorld