import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Animation for popup fade-in
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

const PopupContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.4s ease-out;
`;

const PopupContent = styled.div`
  background: white;
  border-radius: 15px;
  width: 600px;
  display: flex;
  position: relative;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease-out;
    @media (max-width: 768px) {
    width: 80%; /* Remove fixed width */
   
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

  /* New logo styling */
  .main-logo {
    margin-bottom: 20px; /* Add space below the main logo */
    img {
      width: 150px; /* Adjust the size of the main logo */
      height: auto;
    }
  }

  /* Flex container for additional logos */
  .logo-container {
    display: flex; /* Align images in a row */
    gap: 10px; /* Space between images */
    margin-bottom: 15px; /* Space below the logos */
  }

  img {
    width: 70px; /* Set a fixed width for additional logos */
    height: auto; /* Maintain aspect ratio */
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
    display: none; /* Hide the LeftPanel on screen widths <= 768px */
  }
`;

const RightPanel = styled.div`
  padding: 20px;
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    flex: none;
        padding-left: 33px;
    padding-top: 14%;
   
    height: 80vh; /* Increase the height to occupy more of the screen */
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
      flex-direction: column; /* Stack the inputs vertically */
      gap: 10px; /* Maintain spacing between stacked inputs */
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


const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: #555;
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

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    departureCity: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsVisible(false);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "popup-container") {
      closePopup();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <PopupContainer id="popup-container" isVisible={isVisible} onClick={handleOutsideClick}>
      <PopupContent>
      <LeftPanel>
          {/* New main logo */}
          <div className="main-logo">
            <img src="http://localhost:5173/src/assets/images/logo/logo.png" alt="Main Logo" />
          </div>

          {/* Additional logos */}
          <div className="logo-container">
          <img src="http://localhost:5173/src/assets/images/logo/googlereview.png" alt="Logo 3" />
            <img src="http://localhost:5173/src/assets/images/logo/fif.png" alt="Logo 1" />
            <img src="http://localhost:5173/src/assets/images/logo/24hours.png" alt="Logo 2" />
          
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
          <CloseButton onClick={closePopup}>
            <FaTimes />
          </CloseButton>
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
              onChange={(date: Date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Pick your travel date"
              isClearable
              className="custom-datepicker"
            />
            <label>Number of Pax</label>
            <PaxCounter>
              <button type="button" onClick={() => handlePaxChange(false)} disabled={pax <= 1}>
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
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;

