import React from 'react'
import styles from '../css/login.module.css'
import GoogleButton from '../components/googleButton'
const Login = () => {
    return (
        <div>
            <div className={`row ${styles.mainBackgroundContainer}`}>
                <div className={`col-12 col-lg-6`}>
                    <div className={`container p-lg-5 p-4 d-flex flex-column justify-content-center align-items-center ${styles.leftContainer}`}>
                        <h2>Login</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit consequuntur reiciendis culpa, mollitia totam corrupti consequatur debitis, atque rem nostrum placeat libero necessitatibus? Ut quaerat laborum a atque fugit!</p>
                        <GoogleButton/>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-none d-lg-block position-relative ${styles.rightContainer}`}>
                    <div className="position-absolute top-0 end-0">
                        <img src="assets/images/bglogin.png" alt="backgroundImage" srcset="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login