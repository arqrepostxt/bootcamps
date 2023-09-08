import { CiCoins1, CiPhone, CiInstagram, CiCreditCard1 } from "react-icons/ci";

import styles from './Footer.module.css'
function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>Anúncios<CiCoins1 />
            </li>
            <li>Suporte<CiPhone />
            </li>
            <li>Rede Social<CiInstagram />
            </li>
            <li>Taxas <CiCreditCard1 />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2023</p>
        </footer>
        )
}

export default Footer