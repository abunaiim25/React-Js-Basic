import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    return (
        <div className='m-3'>
            <h1>Contact Page</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt totam praesentium officia fuga eaque at temporibus blanditiis suscipit mollitia magni delectus harum quos autem exercitationem ratione, ea quaerat modi distinctio alias, veritatis, quam doloribus ad animi. Minima placeat animi autem assumenda aperiam sunt quod excepturi ipsa soluta, commodi quia ducimus!</p>

            <button onClick={()=>navigate("/")}>Go to Home Page</button>
        </div>
    )
}

export default Contact
