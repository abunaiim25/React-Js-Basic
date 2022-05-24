import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { blogsData } from '../data';

const BlogPage = () => {
    const {title} = useParams();
    const location = useLocation(); //link
    //const [bodyData, setBodyData] =useState("");

    /*
    useEffect(()=>{
        const blogData = blogsData.filter((blog) => blog.title === title);
        setBodyData(blogData[0].body);
    }, []);
*/

  return (
    <div>
      <h1>{title}</h1>
      {/* 
      <p>{bodyData.slice(0,250)}</p>
      <p>{bodyData.slice(251,5000)}</p>
      */}
       <p>{location.state.body.slice(0,250)}</p>
      <p>{location.state.body.slice(251,5000)}</p>
    </div>  
  )
}

export default BlogPage
