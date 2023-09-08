import Logo from "../../assets/Logo64";
import NewTask from "../NewTask";

import styles from "../../styles/Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<NewTask />
		</header>
	);
};

export default Header;