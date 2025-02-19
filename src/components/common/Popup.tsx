import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Img1 from "../../../assets/images/WhyTripstars/15k Customers.png";
import Img2 from "../../../assets/images/WhyTripstars/Award.png";
import Img3 from "../../../assets/images/WhyTripstars/Customer service.png";


// Optional fade-in animation (can be removed if not needed)
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Use a static container instead of a Popup overlay
const StaticContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  animation: ${fadeIn} 0.4s ease-out;
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  background: rgb(11, 11, 11);
  color: white;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-logo {
    margin-bottom: 20px;
    img {
      width: 150px;
      height: auto;
    }
  }

  .logo-container {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  img {
    width: 70px;
    height: auto;
  }

  ul {
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;

    li {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 10px 0;
      gap: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightPanel = styled.div`
  padding: 20px;
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 33px;
    padding-top: 14%;
    height: 80vh;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .row {
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  label {
    font-size: 12px;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 12px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #0a0a52;
    }

    @media (max-width: 768px) {
      padding: 11px;
    }
  }

  .custom-datepicker {
    width: 100%;
    border: 1px solid #ddd;
    padding: 5px;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
      border-color: #0a0a52;
    }

    @media (max-width: 768px) {
      padding: 11px;
    }
  }

  button {
    padding: 8px;
    background: rgb(9, 9, 9);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background: #218838;
    }
  }
`;

const PaxCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    padding: 5px 10px;
    background: #ddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #bbb;
    }
  }

  span {
    font-size: 14px;
  }
`;

const StaticForm: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    departureCity: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaxChange = (increment: boolean) => {
    setPax((prev) => (increment ? prev + 1 : prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, startDate, pax);
  };

  return (
    <StaticContainer>
      <ContentWrapper>
        <LeftPanel>
          {/* Main Logo */}
          <div className="main-logo">
            <img
              src="http://localhost:5173/src/assets/images/logo/logo.png"
              alt="Main Logo"
            />
          </div>

{/* Additional Logos */}
<div className="logo-container">
  <img
    src="https://tripstarsholidays.com/assets/15k%20Customers-C1ZGsemc.png"
    alt="Google Logo"
  />
  <img
    src="https://tripstarsholidays.com/assets/Award-BCL_SkQ2.png"
    alt="24 Hours Logo"
  />
   <img
    src=" https://tripstarsholidays.com/assets/Google%20Rating-9m3tBkj7.png"
    alt="24 Hours Logo"
  />
 
</div>


          <ul>
            <li>
              <FaCheckCircle size={14} /> 100% Customised Trips
            </li>
            <li>
              <FaCheckCircle size={14} /> 95% Visa Success Rate
            </li>
            <li>
              <FaCheckCircle size={14} /> 24x7 Concierge
            </li>
          </ul>
        </LeftPanel>

        <RightPanel>
          <h3>Plan Your Dream Vacation</h3>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your Contact Number"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <div className="row">
              <div>
                <label>Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="maldives">Maldives</option>
                  <option value="bali">Bali</option>
                  <option value="dubai">Dubai</option>
                  <option value="thailand">Thailand</option>
                </select>
              </div>
              <div>
                <label>Departure City</label>
                <input
                  type="text"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  placeholder="Departure City"
                  required
                />
              </div>
            </div>

            <label>Travel Date</label>
            <DatePicker
              selected={startDate}
              dateFormat="dd-MM-yyyy"
              placeholderText="Pick your travel date"
              isClearable
              className="custom-datepicker"
              onChange={(date) => setStartDate(date)}
            />

            <label>Number of Pax</label>
            <PaxCounter>
              <button
                type="button"
                onClick={() => handlePaxChange(false)}
                disabled={pax <= 1}
              >
                -
              </button>
              <span>{pax}</span>
              <button type="button" onClick={() => handlePaxChange(true)}>
                +
              </button>
            </PaxCounter>

            <button type="submit">Submit</button>
          </form>
        </RightPanel>
      </ContentWrapper>
    </StaticContainer>
  );
};

export default StaticForm;
