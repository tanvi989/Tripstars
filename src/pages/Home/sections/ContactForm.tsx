import React from "react";
import styled from "styled-components";

// Styled Components

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  @media (max-width: 1340px) {
    margin: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  background: #00a6db; /* Background color */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    margin:10px auto;
    width:90%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;

  @media (max-width: 768px) {
    display: none; /* Hide image on mobile */
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Right = styled.div`
  flex: 1;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const MobileBanner = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #0096ff;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  color: black;
  text-align: left;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #0096ff; /* Blue Border */
  padding: 10px;
  border-radius: 6px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  background: transparent;
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  background: transparent;
  resize: none;
  height: 50px;
`;

const SubmitButton = styled.button`
  background: #ffd700;
  border: none;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ffcc00;
  }
`;

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Form submitted successfully!");
  };

  return (
    <SliderContainer>
    <Container>
      {/* Left Side - Desktop Only */}
      <Left>
        <Image
          src="https://wanderon.in/assets/images/illustration.png"
          alt="Contact Illustration"
        />
      </Left>

      {/* Right Side - Form */}
      <Right>
        <MobileBanner
          src="https://wanderon.in/assets/svg/contact-form-heading.svg"
          alt="Wanderlust Banner"
        />

        <Title>Wanderlust Calling?</Title>
        <Subtitle>Allow Us to Call You Back!</Subtitle>

        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <InputGroup>
            <Label>Name *</Label>
            <InputBox>
              <i className="fas fa-user"></i>
              <Input type="text" placeholder="e.g. John Smith" required />
            </InputBox>
          </InputGroup>

          {/* Phone Number */}
          <InputGroup>
            <Label>Phone Number *</Label>
            <InputBox>
              <i className="fas fa-phone"></i>
              <Input
                type="tel"
                placeholder="Enter your 10 digit number"
                pattern="[0-9]{10}"
                required
              />
            </InputBox>
          </InputGroup>

          {/* Email */}
          <InputGroup>
            <Label>Email Id *</Label>
            <InputBox>
              <i className="fas fa-envelope"></i>
              <Input type="email" placeholder="john@example.com" required />
            </InputBox>
          </InputGroup>

          {/* Message */}
          <InputGroup>
            <Label>Message</Label>
            <InputBox>
              <i className="fas fa-comment"></i>
              <TextArea placeholder="Any Message"></TextArea>
            </InputBox>
          </InputGroup>

          {/* Submit Button */}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Right>
    </Container>
    </SliderContainer>
  );
};

export default ContactForm;