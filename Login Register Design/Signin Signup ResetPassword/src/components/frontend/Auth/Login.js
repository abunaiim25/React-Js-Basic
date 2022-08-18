import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>

                    <div className='margin_top'>
                        <label><p>Email:</p></label>
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className='margin_top'>
                        <label><p>Password:</p></label>
                        <input type="password" placeholder="Password" id="checkPassword" />
                        <span onClick={window['hideShow3']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
                        <Link to="/forget-password" className='forget_password'><small> Forgot your password?</small></Link>
                    </div>

                    <button>Sign In</button>

                    <p className='signin_account' onClick={window['signupMobile']} id="signUpMobile">Sign in your account <i class="fa-solid fa-arrow-right"></i></p>
                </form>
            </div>
        </>
    )
}

export default Login
