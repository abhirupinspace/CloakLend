import styles from "../styles/Home.module.css";
import { Link } from 'react-router-dom';
import { ConnectButton } from "thirdweb/react";
import { client } from '../client';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <h1 className="text-3xl font-bold">CloakLend</h1>
            </div>
            <div className={styles.navbarLinks}>
                <Link to={"/"}>
                    <p>Home</p>
                </Link>
                <Link to={"/dashboard"}>
                    <p>Dashboard</p>
                </Link>
                <Link to={"/lend"}>
                    <p>Lend</p>
                </Link>
                <Link to={"/borrow"}>
                    <p>Borrow</p>
                </Link>
                <Link to={"/repay"}>
                    <p>Repay</p>
                </Link>
                <Link to={"/profile"}>
                    <p>Profile</p>
                </Link>
            </div>
            <ConnectButton
                client={client}
            />
        </div>
    )
};

export default Navbar