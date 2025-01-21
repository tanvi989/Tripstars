import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import video1 from "../../../assets/Tripdetails/Video/bali_video1.mp4";
import video2 from "../../../assets/Tripdetails/Video/bali_video3.mp4";
import video3 from "../../../assets/Tripdetails/Video/bali_video3.mp4";

// Styled Components
const Container = styled.div`
  width: 100vw;
  position: relative;

  .video-slider {
    width: 100%;
    height: 350px;

    video {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }
  }

  .separator {
    width: 100%;
    height: 5px;
    background-color: black;
  }

  .ratings_bar {
    width: 100%;
    background-color: black;
    padding: 1rem 0;

    .swiper {
      width: 100%;
      height: auto;
    }

@media (max-width: 768px) {
    .ratings_bar .swiper-slide .info span {
        color: #fff;
        font-size: 0.3rem;
    }
         span {
          color: #fff;
          font-size: 0.3rem !important;
        }
}


    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;

      .ratings,
      .info {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background-color: gold;

          svg {
            width: 16px;
            height: 16px;
            fill: #fff;
          }
        }

        span {
          color: #fff;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default function HeroSection2() {
  return (
    <Container>
      {/* Video Slider */}
      <div className="video-slider">
        <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Black Separator Line */}
      <div className="separator"></div>

      {/* Ratings Bar */}
      <div className="ratings_bar">
        <Swiper
          // modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4} /* Default to 4 slides on large screens */
          loop
          autoplay={{ delay: 1000 }} /* Auto-slide every 1 second */
          breakpoints={{
            480: { slidesPerView: 1 }, // 1 slide on very small screens
            768: { slidesPerView: 1 }, // 1 slide on tablets
            1024: { slidesPerView: 4 }, // 4 slides on desktops
          }}
        >
          <SwiperSlide>
            <div className="ratings">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                </svg>
              </div>
              <span>4.6 rated</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6179 8.21372C17.0521 8.55494 17.1276 9.18359 16.7864 9.61786L11.2864 16.6179C11.1216 16.8276 10.8798 16.9628 10.6148 16.9934C10.3499 17.0241 10.0836 16.9475 9.87534 16.7809L7.37534 14.7809C6.94408 14.4359 6.87416 13.8066 7.21917 13.3753C7.56418 12.9441 8.19347 12.8742 8.62473 13.2192L10.337 14.589L15.2137 8.38222C15.5549 7.94795 16.1836 7.87251 16.6179 8.21372ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                  ></path>
                </svg>
              </div>
              <span>100% Customised Trips</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info">
              <div className="icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6179 8.21372C17.0521 8.55494 17.1276 9.18359 16.7864 9.61786L11.2864 16.6179C11.1216 16.8276 10.8798 16.9628 10.6148 16.9934C10.3499 17.0241 10.0836 16.9475 9.87534 16.7809L7.37534 14.7809C6.94408 14.4359 6.87416 13.8066 7.21917 13.3753C7.56418 12.9441 8.19347 12.8742 8.62473 13.2192L10.337 14.589L15.2137 8.38222C15.5549 7.94795 16.1836 7.87251 16.6179 8.21372ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                  ></path>
                </svg>
              </div>
              <span>95% Visa Success Rate</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info">
              <div className="icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6179 8.21372C17.0521 8.55494 17.1276 9.18359 16.7864 9.61786L11.2864 16.6179C11.1216 16.8276 10.8798 16.9628 10.6148 16.9934C10.3499 17.0241 10.0836 16.9475 9.87534 16.7809L7.37534 14.7809C6.94408 14.4359 6.87416 13.8066 7.21917 13.3753C7.56418 12.9441 8.19347 12.8742 8.62473 13.2192L10.337 14.589L15.2137 8.38222C15.5549 7.94795 16.1836 7.87251 16.6179 8.21372ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                  ></path>
                </svg>
              </div>
              <span>24x7 Concierge</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
