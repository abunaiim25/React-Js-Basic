import React from 'react';
import TestimonialApi from './TestimonialApi';

const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index }) => {
  //const { id, image, design, name, offcer, post, date, desc, valueIndex, index } =props;

  //slider
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        {/*<div className='box d_flex' className={position} key={id}>*/}
          <div className='left box_shodow'>
            <div className='img'>
              <img style={{ width: "100%", height: "250px" }} src={image} alt='' />
            </div>

            <div className='details '>
              <span className='primary_color'>{design}</span>
              <h2>{name}</h2>
              <label>{offcer}</label>
            </div>
          </div>

          <div className='right '>
            <div className='icon'>
              <div className='quote'>
              <i class="fa-solid fa-quote-right"></i>
              </div>
            </div>
            <div className='content  mtop box_shodow'>
              <h1>{post}</h1>
              <h3>{date}</h3>
              <p>{desc}</p>
            </div>
        </div>
      </article>
    </>
  )
}

export default Slide
