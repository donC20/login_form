import React from 'react';
import styles from '../css/googleButton.module.css';
import { Link } from 'react-router-dom';
const GoogleButton = () => {
    return (
        <div>
            <button className={`d-flex align-items-center gap-2 ${styles["google-btn"]}`}>
                <div className={`d-flex justify-content-center align-items-center ${styles["google-icon-wrapper"]}`}>
                    <img className={styles["google-icon"]} src="assets/icons/google.png" alt="Google Icon" />
                </div>
                <div className="d-flex justify-content-center align-items-center w-100">
                    <Link to={'/todo'} className={`m-0 ${styles["btn-text"]}`}>Sign in with Google</Link>
                </div>
            </button>
        </div>

    );
};

export default GoogleButton;
