import styled from "styled-components";

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Adds spacing between lines */
`;

const Line1 = styled.h1`
  font-size: 12px;
  color: #555; /* Set your desired color */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 10px; /* Adjust font size for smaller screens */
  }
`;

const Line2 = styled.h2`
  font-size: 30px;
  color: #333; /* Set your desired color */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
  }
`;

const Line3 = styled.h3`
  font-size: 13px;
  color: #777; /* Set your desired color */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px; /* Adjust font size for smaller screens */
  }
`;

interface HeadingProps {
  line1: string;
  line2: string;
  line3: string;
}

export default function Heading({ line1, line2, line3 }: HeadingProps) {
  return (
    <HeadingWrapper>
      <Line1>{line1}</Line1>
      <Line2>{line2}</Line2>
      <Line3>{line3}</Line3>
    </HeadingWrapper>
  );
}
