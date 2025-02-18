import React, { useState } from "react";
import styled from "styled-components";

// Interface for TableHeader Props
interface TableHeaderProps {
  isOpen: boolean;
}

// Styled Components
const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const TableWrapper = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TableHeader = styled.div<TableHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: linear-gradient(90deg, #e3f2fd, #bbdefb);
  border-radius: 8px;
  cursor: pointer;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #333;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.2s ease-in-out;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const TableContent = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  color: #555;
  border: 1px solid #ddd;
  border-top: none;
  background-color: #f9f9f9;
  border-radius: 0 0 8px 8px;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    th,
    td {
      padding: 10px;
      border: 1px solid #ddd;
    }

    th {
      background-color: #007bff;
      color: #fff;
      font-weight: bold;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f1f1f1;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

// Main Component
const PricingTables: React.FC = () => {
  const tables = [
    { title: "Land Package Price - Table 1" },
    { title: "Land Package Price - Table 2" },
    { title: "Land Package Price - Table 3" },
  ];

  const [openTables, setOpenTables] = useState<number[]>([]);

  const toggleTable = (index: number) => {
    setOpenTables((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderTableContent = () => (
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>4 Star Hotels</th>
          <th>5 Star Hotels</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kuta</td>
          <td>
            Swiss-Belhotel Rainforest, Kuta<br />
            The One Legion<br />
            Golden Tulip Jineng Resort
          </td>
          <td>
            Bintang Bali Resort<br />
            Royal Tulip Springhill Resort<br />
            Pullman Bali Legian Beach
          </td>
        </tr>
        <tr>
          <td>Ubud</td>
          <td>
            Alam Puisi Ubud<br />
            Ashoka Tree Resort Ubud<br />
            Bhumi Linggah
          </td>
          <td>
            Asvara Villa Ubud<br />
            FuramaXclusive Resort & Villas<br />
            Hideaway Village Bali
          </td>
        </tr>
        <tr>
          <th colSpan={3}>Pricing Details</th>
        </tr>
        <tr>
          <td>Cost per Adult</td>
          <td>₹35,000</td>
          <td>₹44,000</td>
        </tr>
        <tr>
          <td>Cost per Child (Without Bed)</td>
          <td>₹21,000</td>
          <td>₹26,400</td>
        </tr>
        <tr>
          <td>Cost per Child (With Bed)</td>
          <td>₹24,500</td>
          <td>₹30,800</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <Container>
      <h2>Pricing Tables</h2>
      {tables.map((table, index) => (
        <TableWrapper key={index}>
          <TableHeader
            onClick={() => toggleTable(index)}
            isOpen={openTables.includes(index)}
          >
            <h3>{table.title}</h3>
            <span>{openTables.includes(index) ? "▲" : "▼"}</span>
          </TableHeader>
          {openTables.includes(index) && (
            <TableContent>{renderTableContent()}</TableContent>
          )}
        </TableWrapper>
      ))}
    </Container>
  );
};

export default PricingTables;
