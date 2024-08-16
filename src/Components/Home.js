import React from 'react';
import '../style1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Home() {
    return (



        <section className="home" id="home">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="home-slider"
            >
                <SwiperSlide
                    className="slide"
                    style={{ background: "url('/images/home-bg-1.jpg') no-repeat" }}
                >
                    <div className="content">
                        <span>be strong, be fit</span>
                        <h3>Make yourself stronger than your excuses.</h3>
                        <a href="/" className="btn1">get started</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="slide"
                    style={{ background: "url('/images/home-bg-4.jpg') no-repeat" }}
                >
                    <div className="content">
                        <span>be strong, be fit</span>
                        <h3>Make yourself stronger than your excuses.</h3>
                        <a href="/" className="btn1">get started</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="slide"
                    style={{ background: "url('/images/home-bg-3.jpg') no-repeat" }}
                >
                    <div className="content">
                        <span>be strong, be fit</span>
                        <h3>Make yourself stronger than your excuses.</h3>
                        <a href="/" className="btn1">get started</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>



    )
}