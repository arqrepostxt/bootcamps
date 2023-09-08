import styles from "./Home.module.css"
import piggyBank from "../../img/pigbank.svg"
import LinkButton from "../layout/LinkButton"

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/new-project" text="Criar Projeto" />
            <img src={piggyBank} alt="Logo" />
        </section>
    )
}

export default Home