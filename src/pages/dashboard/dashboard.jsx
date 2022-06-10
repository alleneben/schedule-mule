import { AiFillDashboard, AiFillSchedule, AiFillAppstore } from 'react-icons/ai';
import { FaUserAlt, FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';



import { Cards, Card } from '../../components';
import styles from "./dashboard.module.scss";

const Dashboard = () => {
    return <><nav className={styles.navbar}>
        <div className={styles.menuItems}>
            <div className={styles.menuItem}>
                <AiFillDashboard />
                Dashboard
            </div>
            <div className={styles.menuItem}>
                <AiFillSchedule />
                Schedule
            </div>
            <div className={styles.menuItem}>
                <FaUserAlt />
                Customer
            </div>
            <div className={styles.menuItem}>
                <AiFillAppstore />
                My Apps
            </div>
            <div className={styles.menuItem}>
                <FaRegMoneyBillAlt />
                My Money
            </div>
        </div>
        <div className={styles.menuItems}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>+ New</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Log out</button>
            <div>
                <IoMdNotifications />
                <span className={styles.badge}>5</span>
            </div>
        </div>
    </nav>
    <main className={styles.container}>
        <Cards styles={styles}>
            <Card styles={styles} />
            <Card styles={styles} />
            <Card styles={styles} />
            <Card styles={styles} />
        </Cards>
    </main>

    </>
}


export default Dashboard;