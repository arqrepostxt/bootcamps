import { Link } from "react-router-dom"
import styles from './Navbar.module.css' 

function Navbar() {
    return (<> 
    <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li className={styles.item}>
          <Link to="/about">About</Link></li>
      </ul>
      <ul>
        <li className={styles.item}>
          <Link to="/contact">Contact</Link></li>
      </ul> 
    </> )
}

export default Navbar