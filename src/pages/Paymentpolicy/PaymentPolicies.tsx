import React from "react";
import styled from "styled-components";
import { FaUniversity, FaQrcode, FaExclamationCircle } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  width: 90%;
 padding:0 15rem;
  margin: 20px auto;
  background: white;
  padding: 20px;
  border-radius: 8px;

    color: linear-gradient(to bottom, #FFD700, #B8860B); /* Gold Gradient */
    @media (max-width: 768px) { 
    width: 100%;
    padding: 20px; /* Avoid excessive padding */
  }
`;

const SectionTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
background-color: linear-gradient(to bottom, #FFD700, #B8860B);

  color: black;
  padding: 10px 15px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const SubSection = styled.div`
  background-color: #f9f9f9;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  color: black;
   @media (max-width: 768px) { 
      padding: 10px;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 14px;
  border: 1px solid #ddd;
  text-align: left;
  color: black;
`;

const Td = styled.td<{ isEven?: boolean }>`
  border: 1px solid #ddd;
  padding: 14px;
  text-align: left;
  color: black;
  background-color: ${({ isEven }) => (isEven ? "#f4f4f4" : "white")};
`;


const Note = styled.div`
  background-color: #d8e3fc;
  padding: 14px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;

const PaymentPolicies: React.FC = () => {
  return (
    <Container>
      {/* Payment Section */}
      <SectionTitle>
        <FaUniversity /> Pay Us At
      </SectionTitle>

      <SubSection>
        <SectionTitle>
          <FaUniversity /> Bank Transfer
        </SectionTitle>
        <p>
          <b>A/C No:</b> 054833199001
        </p>
        <p>
          <b>A/C Name:</b> Wanderon Experiences Private Limited
        </p>
        <p>
          <b>IFSC Code:</b> HSBC0110005
        </p>
      </SubSection>

      <SubSection>
        <SectionTitle>
          <FaQrcode /> UPI Payment
        </SectionTitle>
        <p>
          <b>UPI ID (Google Pay/BHIM/PhonePe):</b> WanderOn@HSBC
        </p>
        <p>
          <b>UPI Name:</b> WanderOn/WanderOn Experiences Private Limited
        </p>
        <p>
          <b>Scan & Pay:</b>
        </p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WanderOn@HSBC"
          alt="UPI QR Code"
        />
      </SubSection>

      <SubSection>
        <SectionTitle>Razorpay Link</SectionTitle>
        <p>
          <b>Payment via Razorpay:</b>{" "}
          <a
            href="https://razorpay.me/@wanderon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Click Here to Pay
          </a>
        </p>
        <Note>
          Note: A payment gateway charge of 3% will be levied when using the
          above payment link.
        </Note>
      </SubSection>

      {/* Payment Policy Section */}
      <SectionTitle>Payment Policy</SectionTitle>
      <SubSection>
        <p>
          Refer to the Short Haul and Long Haul payment & cancellation policies.
        </p>
        <ul>
          <li>
            <b>Short Haul Destinations:</b> Domestic Trips, Bhutan, Nepal, etc.
          </li>
          <li>
            <b>Long Haul Destinations:</b> Europe, UK, USA, Canada, Australia,
            etc.
          </li>
        </ul>
      </SubSection>

      {/* Short Haul Packages */}
      <SectionTitle>SHORT HAUL PACKAGES</SectionTitle>
      <SubSection>
        <h3>Payment Policy</h3>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Number Of Days Prior To Tour Date</Th>
                <Th>Amount to be Paid</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["At the time of booking", "25% of the full tour cost or cancellation charges"],
                ["Within 45 Days", "50% of the Full Tour Cost"],
                ["Within 30 Days", "75% of the Full Tour Cost"],
                ["20 Days from Departure", "100% of the Full Tour Cost"],
              ].map((row, index) => (
                <tr key={index}>
                  <Td isEven={index % 2 === 0}>{row[0]}</Td>
                  <Td isEven={index % 2 === 0}>{row[1]}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </SubSection>

      {/* Long Haul Packages */}
      <SectionTitle>LONG HAUL PACKAGES</SectionTitle>
      <SubSection>
        <h3>Payment Policy</h3>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Number Of Days Prior To Tour Date</Th>
                <Th>Amount to be Paid</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["At the time of booking", "INR 40,000 Per Person"],
                ["Within 60 Days", "50% of the Full Tour Cost"],
                ["Within 45 Days", "75% of the Full Tour Cost"],
                ["30 Days from Departure", "100% of the Full Tour Cost"],
              ].map((row, index) => (
                <tr key={index}>
                  <Td isEven={index % 2 === 0}>{row[0]}</Td>
                  <Td isEven={index % 2 === 0}>{row[1]}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </SubSection>

      {/* Final Note Section */}
      <Note>
        <p>
          <FaExclamationCircle /> <b>Important Note:</b>
        </p>
        <ul>
          <li>Make payments only to the official bank details on our website.</li>
          <li>We are not responsible for payments made to unauthorized accounts.</li>
          <li>
            For questions, contact: <b>9090403075</b>
          </li>
          <li>A payment gateway charge of 3% will be applied via Razorpay.</li>
        </ul>
      </Note>
    </Container>
  );
};

export default PaymentPolicies;
