import styles from "./card.module.scss";

const CardHeader = ({ children }) => {

    return <div className={styles.cardHead}>
            { children }
    </div>
}

export default CardHeader;