import React from 'react';
import "./Home.css";
import { Typewriter } from 'react-simple-typewriter' //Typewriter

import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import hero from "../pic/hero.png";

const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="container f_flex top">

                    <div className="left top">
                        <h3 >Welcome To My Website</h3>

                        <h1>Hi, I'm <span>Abu Naiim</span></h1>
                        <h2>a <span>
                            <Typewriter
                                words={["Software Engineer", "Programmer."]}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={60}
                                delaySpeed={1500} />
                        </span></h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor ad a accusantium! In ducimus facere sint vel repellendus illum tempore vero aliquid, nobis cupiditate iste eaque corporis accusantium sunt fuga provident distinctio, dolores unde libero? Recusandae nobis quia sapiente! Minus voluptate reprehenderit quam molestiae illo ducimus aperiam distinctio maxime voluptas quod. Dolor praesentium tempora rerum voluptatum doloribus aspernatur reprehenderit ad laborum numquam! Delectus est dignissimos a vel, tempora dolore ipsam. Quasi, cum. Provident dolorum esse, temporibus illum officia est nulla, praesentium dolor corporis autem quisquam maxime recusandae doloremque, hic vero soluta quae repellat placeat earum aperiam ipsum. Aut, cumque.</p>


                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
