import { FiSettings } from 'react-icons/fi';
import { FaCalendarCheck } from 'react-icons/fa';

import Img from "../../assets/img/avatar-ali.png";


const Card = ({ styles }) => {

    return <div className={styles.card}>
    <div>
        <div className={styles.cardHead}>
            <div><FaCalendarCheck /> Upcoming jobs</div>
            <div><FiSettings /></div>
        </div>
        <div className={styles.cardContent}>
            <div className={styles.divider}></div>
            <div className={styles.jobCard}>
                <div className={styles.jobTime}><h1>9:00am</h1> <span>Scheduled</span></div>
                <div className={styles.jobDetail}>
                    <div className={styles.jobTitle}>Flat Rate Clean - 180/QA</div>
                    <div className={styles.jobAddress}>
                        <p>Jennifer Pratt, 90 East Accra, Pothole Drive</p>
                    </div>
                </div>
                <img src={Img} alt="Avatar" />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.jobCard}>
                <div className={styles.jobTime}><h1>9:00am</h1> <span>Scheduled</span></div>
                <div className={styles.jobDetail}>
                    <div className={styles.jobTitle}>Flat Rate Clean - 180/QA</div>
                    <div className={styles.jobAddress}>
                        <p>Jennifer Pratt, 90 East Accra, Pothole Drive</p>
                    </div>
                </div>
                <img src={Img} alt="Avatar" />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.jobCard}>
                <div className={styles.jobTime}><h1>9:00am</h1> <span>Scheduled</span></div>
                <div className={styles.jobDetail}>
                    <div className={styles.jobTitle}>Flat Rate Clean - 180/QA</div>
                    <div className={styles.jobAddress}>
                        <p>Jennifer Pratt, 90 East Accra, Pothole Drive</p>
                    </div>
                </div>
                <img src={Img} alt="Avatar" />
            </div>
        </div>
    </div>
    <div className={styles.cardFooter}>SEE ALL JOBS</div>
</div>
}

export default Card;