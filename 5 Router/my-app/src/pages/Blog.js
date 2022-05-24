import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

import { blogsData } from '../data';

const Blog = () => {

    const [blogs, setBlogs] = useState(blogsData);
    const navigate = useNavigate();

    //Learn more
    const truncateString = (str, num) =>
    {
        if(str.length > num)
        {
            return str.slice(0, num) + "...";
        }
        else{
            return str;
        }
    }

    return (

        <div className='m-3'>
            <h1>Blog Page</h1>

            <section>
                {
                    blogs.map((blog) => {
                        const { id, title, body } = blog; //distructring
                       return <article key={id}>
                            <h3>{title}</h3>
                            <p>{truncateString(body, 100)}</p>

                         <Link to={title} state={{ id, title, body }}>Learn More</Link>
                        </article>
                    })
                }
            </section>

            <button onClick={() => navigate("/")}>Go to Home Page</button>
        </div>
    )
}

export default Blog
