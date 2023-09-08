import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUseremail] = useState()


    function enviarEmail(e) {
        e.preventDefault()
        setUseremail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUseremail('')
    }
    
    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            {/* Comentário : Se userEmail for verdadeiro/não nulo renderiza a div */}
            {userEmail && (
                <div>
                    <p>O email inserido é: {userEmail}</p>
                    {/* Comentário: ao clicar no botão Limpar email o userEmail é deixado em branco */}
                    <button onClick={limparEmail}>Limpar email</button>
                    </div>
            )}
        </div>
    )
}

export default Condicional

