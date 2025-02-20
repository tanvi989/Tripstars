import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        author: "Harshil Raja",
        text: "We had recently been to Bali & Gilli for a 9N/10D trip which I booked through Tripstars. This was one of the most memorable experience that I ever had about a holiday trip. We had hassle-free check-ins, personally curated itinerary, a warm welcome with flower garland and a very friendly tour guide cum driver named Mr. Boggie who accompanied us throughout the journey and ensured that we did not have to bother about anything. Thank you Tripstars for making it memorable. Kudos to the entire team.",
        rating: 5,
        link: "https://maps.app.goo.gl/cyMsjma5ssKNrmDfA"
    },
    {
        author: "Akshar Thakkar",
        text: "I got my trip planning and execution through Tripstars, everything was up to the mark✨. Every destination was filtered as per our requirement in the trip. Last but not the least, main point: got the best rate from them, as I did comparison with other travel agencies.",
        rating: 4,
        link: "https://maps.app.goo.gl/ERevErCVqVmj3u7c6"
    },
    {
        author: "Saurabh Sanghavi",
        text: "The association with Tripstars Holidays has been amazing. Our trip to Bali was well planned and organized by them. The trip remained smooth with no issues or complaints. The driver was very good and helpful there. They created a group and provided assistance through WhatsApp while reaching Bali. The support of Niketan and Saurabh has been phenomenal. Looking forward to having more trips with them ahead!",
        rating: 5,
        link: "https://g.co/kgs/qHABwaj"
    }
];
const Container = styled.div`
  padding: 0 15rem;
  text-align: center;

  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;
const StaticReviews = () => {
    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 2 reviews at a time
        slidesToScroll: 1,
        autoplay: true, // Auto-slide enabled
        autoplaySpeed: 1000, // 4 seconds per slide
        arrows: false, // Hide prev/next arrows
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 review per slide on mobile
                }
            }
        ]
    };

    return (
        
        <ReviewsContainer>
            <h2>What Our Customers Say</h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <a href={review.link} key={index} target="_blank" rel="noopener noreferrer" className="review-link">
                        <div className="review-card">
                            <div className="review-content">
                                <p className="review-text">
                                    "{review.text.slice(0, 150)}..."
                                </p>
                                <div className="review-footer">
                                    <p className="review-rating">⭐ {review.rating}/5</p>
                                    <p className="review-author">- {review.author}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </Slider>
            <a 
                href="https://www.google.com/maps/place/Tripstars+Holidays/@23.0284851,72.4902804,16.5z/data=!4m14!1m5!8m4!1e1!2s104233398754855690357!3m1!1e1!3m7!1s0x395e9b275e7c5111:0x72cdb2c8eab2e658!8m2!3d23.0290117!4d72.4920198!9m1!1b1!16s%2Fg%2F11tg9wbbj3?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button className="review-button">See All Reviews</button>
            </a>
        </ReviewsContainer>
    );
};

// Styled Components
const ReviewsContainer = styled.div`
    text-align: center;
    padding: 50px 20px;
    margin: 
    background:rgb(224, 224, 224);

    h2 {
        font-size: 28px;
        margin-bottom: 25px;
        font-weight: bold;
        color: #333;
    }

    .slick-slide {
        display: flex;
        justify-content: center;
    }

    .review-link {
        text-decoration: none;
        color: inherit;
    }

    .review-card {
    margin: 1rem !important;
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        max-width: 320px;
        text-align: left;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 220px;
    }

    .review-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .review-content {
        flex-grow: 1;
    }

    .review-text {
        font-style: italic;
        font-size: 16px;
        color: #555;
        line-height: 1.5;
    }

    .review-author {
        font-weight: bold;
        margin-top: 10px;
        color: #222;
    }

    .review-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .review-rating {
        color: gold;
        font-size: 18px;
        font-weight: bold;
    }

    .review-button {
        margin-top: 30px;
        padding: 12px 24px;
        font-size: 16px;
        background: #000;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s;
    }

    .review-button:hover {
        background: #ffd700;
    }
`;

export default StaticReviews;
