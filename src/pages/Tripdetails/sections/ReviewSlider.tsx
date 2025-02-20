import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        author: "Harshila Raja",
        text: "We had recently been to Bali & Gilli for a 9N/10D trip which I booked through Tripstars. This was one of the most memorable experience that I ever had about a holiday trip.",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/women/57.jpg",
        link: "https://maps.app.goo.gl/cyMsjma5ssKNrmDfA"
    },
    {
        author: "Akshar Thakkar",
        text: "I got my trip planning and execution through Tripstars, everything was up to the mark✨. Every destination was filtered as per our requirement in the trip.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/58.jpg",
        link: "https://maps.app.goo.gl/ERevErCVqVmj3u7c6"
    },
    {
        author: "Saurabh Sanghavi",
        text: "The association with Tripstars Holidays has been amazing. Our trip to Bali was well planned and organized by them. The trip remained smooth with no issues or complaints.",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        link: "https://g.co/kgs/qHABwaj"
    }
];

const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewCard key={index}>
                        <QuoteMark>“</QuoteMark>
                        <ProfileImage src={review.image} alt={review.author} />
                        <ReviewText>
                            {review.text.slice(0, 100)}...
                            <a href={review.link} target="_blank" rel="noopener noreferrer" className="more"> more...</a>
                        </ReviewText>
                        <Author>{review.author}</Author>
                        <Rating>
                            {review.rating}{" "}
                            <span role="img" aria-label="stars">⭐ ⭐ ⭐ ⭐ ⭐</span>
                        </Rating>
                    </ReviewCard>
                ))}
            </Slider>
        </SliderContainer>
    );
};

const SliderContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
`;

const ReviewCard = styled.div`
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const QuoteMark = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: black;
    position: absolute;
    top: -10px;
    left: 20px;
`;

const ProfileImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

const ReviewText = styled.p`
    font-size: 16px;
    color: #333;
    text-align: center;
    font-weight: 500;
    line-height: 1.4;
    .more {
        color: green;
        font-weight: bold;
        text-decoration: none;
    }
`;

const Author = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #222;
`;

const Rating = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #ff9800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export default ReviewSlider;
