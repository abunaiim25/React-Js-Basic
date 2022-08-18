import React from 'react'

const Register = () => {
  return (
    <>
      <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>

            <div className='margin_top'>
              <label><p>Name:</p></label>
              <input type="text" placeholder="Name" />
            </div>

            <div className='margin_top'>
              <label><p>Email:</p></label>
              <input type="email" placeholder="Email" />
            </div>

            <div className='margin_top'>
              <label><p>Password:</p></label>
              <input type="password" placeholder="Password" id="myPassword" />
              <span onClick={window['hideShow']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>

            <div className='margin_top'>
              <label><p>Confirm Password:</p></label>
              <input type="password" placeholder="Confirm Password" id="confirm_password" />
              <span onClick={window['hideShow2']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>
            <button className='top'>Sign Up</button>

            <p className='signin_account'  onClick={window['loginMobile']} id="signInMobile"><i class="fa-solid fa-arrow-left"></i>  Sign in your account </p>

          </form>
        </div>
    </>
  )
}

export default Register
