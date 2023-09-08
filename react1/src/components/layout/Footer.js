import { CiBank, CiBarcode, CiBeaker1 } from 'react-icons/ci'
import styles from './Footer.module.css'

function Footer() {
    return <footer>
        <ul  className={styles.social_list}>
            <li><CiBank />Inernet Banking</li>
            <li><CiBarcode />Credentials</li>
            <li><CiBeaker1 />Trials</li>
        </ul>
        <p>Desenvolvido com React</p>
        </footer>
}

export default Footer