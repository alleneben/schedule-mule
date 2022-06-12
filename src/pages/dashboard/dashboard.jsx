import { AiFillDashboard, AiFillSchedule, AiFillAppstore } from 'react-icons/ai';
import { FaUserAlt, FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { FaCalendarCheck } from 'react-icons/fa';



import { Cards, Card, CardHeader, CardContent, CardFooter, JobCard, Divider } from '../../components';
import styles from "./dashboard.module.scss";
import Img from "../../assets/img/avatar-ali.png";

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
        <Cards>
            {
                [3,4,6,5].map((card,key) => <Card key={key}>
                    <CardHeader>
                        <div><FaCalendarCheck /> Upcoming jobs</div>
                        <div><FiSettings /></div>
                    </CardHeader>
                    <CardContent>
                        <JobCard styles={styles} Img={Img}/>
                        <Divider styles={styles} />
                        <JobCard styles={styles} Img={Img}/>
                        <Divider styles={styles} />
                        <JobCard styles={styles} Img={Img}/>
                    </CardContent>
                    <CardFooter>
                        SEE ALL JOBS
                    </CardFooter>
                </Card>
                )
            }
        </Cards>
    </main>

    </>
}


export default Dashboard;