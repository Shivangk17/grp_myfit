import React from 'react';

import '../style1.css';
export default function About() {
    return (
        <div>
            <br /><br />
            <section className="about" id="about">
                <div className="image">
                    <img src="/images/about-img.jpg" />
                </div>

                <div className="content">
                    <span>about us</span>
                    <h3 className="title">Everyday is a chance to become better</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis eligendi quo cumque at
                        consequuntur autem! Eveniet numquam mollitia praesentium!</p>
                    <div className="box-container">

                        <div className="box">
                            <h3>
                                <i className="fas fa-check"></i>body and mind
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur.</p>
                        </div>

                        <div className="box">
                            <h3>
                                <i className="fas fa-check"></i>healthy life
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur.</p>
                        </div>

                        <div className="box">
                            <h3>
                                <i className="fas fa-check"></i>strategies
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur.</p>
                        </div>

                        <div className="box">
                            <h3>
                                <i className="fas fa-check"></i>workout
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur.</p>
                        </div>
                    </div>
                    <a href="/" className="btn1">read more</a>
                </div>
            </section>
        </div>
    )
}
