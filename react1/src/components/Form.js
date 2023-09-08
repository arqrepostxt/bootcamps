import { useState } from "react"

function Form() {
    function confirmarEnvio(e) {
        e.preventDefault()
        console.log(username)
        console.log(secret)
        console.log(`As informações do usuario ${username} de secret ${secret} foram enviadas`)
    }

    const [username, setUsername] = useState()
    const [secret, setSecret] = useState()


    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={confirmarEnvio}>
                <div>
                    <label htmlFor="username"></label>
                    <input 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Digite o seu nome"
                    onChange={(e) => setUsername(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="secret"></label>
                    <input 
                    type="secret" 
                    id="secret"
                    name="secret"
                    placeholder="Digite o seu segredo"
                    onChange={(e) => setSecret(e.target.value)}/>
                </div>
                <div>
                    <input 
                    type="submit" 
                    value="Confirmar"/>
                </div>
            </form>
        </div>
    )
}

export default Form