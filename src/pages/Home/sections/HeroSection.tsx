import styled from "styled-components";
import homeVideo from "../../../assets/Videos/Homepage/WEBBANNER 2.mp4";

// Container for the Hero Section
const Container = styled.div`
  width: 100vw;
  height: 60svh;
  position: relative;

  // Rating Bar Styling
  .ratings_bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #000;
    display: flex;
    padding: 0.8rem 20rem;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    span {
      color: #fff;
      font-size: 1rem;
      display: block;
    }

    .ratings {
      display: flex;
      align-items: center;

      .icon {
        display: flex;
        align-items: center;

        svg {
          width: 1rem;
          fill: #fff;
        }
      }
    }

    .info {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .icon {
        display: flex;
        align-items: center;
        fill: #00c684;
      }
    }
  }

  // Video Background Styling
  .home_video_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
      object-position: center;
    }
  }

// Search Box Styling
.search_box_wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;

  .experience_text {
    font-size: 28px;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    width: 300px;
    border: none;
    border-radius: 30px;
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  input:focus {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    background-color:rgb(0, 13, 27);
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-left: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background-color:rgb(0, 4, 7);
    color
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  button:focus {
    outline: none;
  }
}


  // Responsive Media Queries
  @media (max-width: 1340px) {
    .ratings_bar {
      padding: 0.8rem 8rem;
    }
  }

  @media (max-width: 1080px) {
    .ratings_bar {
      padding: 0.8rem 4rem;

      span {
        font-size: 0.9rem;
      }

      .info {
        gap: 0.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 50vh;

    .ratings_bar {
      padding: 0.8rem 1rem;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;

      span {
        font-size: 0.8rem;
      }

      .info {
        gap: 0.5rem;
      }
    }

    .search_box_wrapper {
      button {
        display: none; /* Hide the search button on mobile */
      }
    }
  }
`;

// Hero Section Component
export default function HeroSection() {
  return (
    <Container>
      {/* Ratings Bar */}
      <div className="ratings_bar">
        <div className="ratings">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
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
        <div className="info">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6179 8.21372C17.0521 8.55494 17.1276 9.18359 16.7864 9.61786L11.2864 16.6179C11.1216 16.8276 10.8798 16.9628 10.6148 16.9934C10.3499 17.0241 10.0836 16.9475 9.87534 16.7809L7.37534 14.7809C6.94408 14.4359 6.87416 13.8066 7.21917 13.3753C7.56418 12.9441 8.19347 12.8742 8.62473 13.2192L10.337 14.589L15.2137 8.38222C15.5549 7.94795 16.1836 7.87251 16.6179 8.21372ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
              ></path>
            </svg>
          </div>
          <span>100% Customised Trips</span>
        </div>
      </div>

      {/* Search Box */}
      <div className="search_box_wrapper">
        <div className="experience_text">Where Every Experience Counts!</div>
        <input type="text" placeholder="Search..." />
        {/* <button>Search</button> */}
      </div>

      {/* Video Background */}
      <div className="home_video_wrapper">
        <video src={homeVideo} autoPlay muted loop playsInline></video>
      </div>
    </Container>
  );
}
