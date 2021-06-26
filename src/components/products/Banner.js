import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Container} from '@material-ui/core'

import '../../App.css'

import 'swiper/swiper-bundle.min.css'
import useStyles from "../style";


export default function Banner() {
  const classes = useStyles();

    return (
        <div className={classes.app__banner}>
        <Container maxWidth="lg">
             <Swiper
      spaceBetween={20}
      slidesPerView={2}
      pagination={{ clickable: true }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <div>
        <img className="myslide" src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg" alt=""/>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide">
      <img className="myslide" src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg" alt=""/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="myslide" src="https://images.pexels.com/photos/322338/pexels-photo-322338.jpeg" alt="" />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </Container>
        </div>
    )
}
