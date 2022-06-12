import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';



import { InputField } from '../../components';
import styles from "./login.module.scss";

const Login = () => {
    const [user, setUser] = useState({ login: null, error: null})

    const onSubmit = async (e) =>{
        e.preventDefault()
        setUser({ login: true })
    }


    return <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                {/* <h2></h2> */}
                <FaUserCircle />
            </div>
            {
                user.login && (<Navigate to="/dashboard" replace={true} />)
            }
            <form onSubmit={(e) => onSubmit(e)}>
                <div className={styles.cardBody}>
                    <InputField className={styles.formInput} type="text" placeholder="Username"/>
                    <InputField className={styles.formInput} type="password" placeholder="Password"/>
                    <p>Forgotten Password ?</p>
                </div>
                <div className={styles.cardFooter}>
                    <button className={styles.button} type="submit">LOG IN</button>
                </div>
            </form>
        </div>
    </div>
}

export default Login;