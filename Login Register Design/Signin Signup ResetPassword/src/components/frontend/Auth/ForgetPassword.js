import React from 'react'

const ForgetPassword = () => {
    return (
        <>
            <div className="container_resetPassword" id="container">
           
                <form action="#">
                    <h2>Forgot Password?</h2>

                    <h6><i class="fa fa-lock fa-4x"></i></h6>

                    <div className='margin_top'>
                        <label><p>Email:</p></label>
                        <input type="email" placeholder="Email" />
                    </div>

                    <button className='reset_btn'>Reset Password</button>

                </form>
            </div>
        </>
        
    )
}

export default ForgetPassword
