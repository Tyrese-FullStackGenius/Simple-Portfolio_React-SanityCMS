import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { client, urlFor } from "../../client";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      <span className="section__subtitle">My Client Say</span>
      <h2 className="section__title">Testimonials</h2>

      <div className="container testimonial__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
          className="testimonial__container container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="testimonial__card" key={index}>
              <img src={urlFor(testimonial.imgUrl)} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default AppWrap(Testimonials, "testimonials");
