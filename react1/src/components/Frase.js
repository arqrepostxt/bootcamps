import styles from './frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente para apresentar uma frase</p>
        </div>
    )
}
export default Frase