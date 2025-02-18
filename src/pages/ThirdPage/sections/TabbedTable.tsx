import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  background-color: #f9fafc;
  border-bottom: 2px solid #d1d9e0;
  flex-wrap: wrap; // Allow wrapping on small screens

  @media (max-width: 768px) {
    flex-direction: column; // Stack tabs vertically
  }
`;

const Tab = styled.div<{ active: boolean }>`
  padding: 10px 20px;
  margin: 5px 5px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #d1d9e0;
  background-color: ${(props) => (props.active ? "#ffffff" : "#f9fafc")};
  color: ${(props) => (props.active ? "#f39c12" : "#333")};
  font-weight: ${(props) => (props.active ? "bold" : "500")};
  box-shadow: ${(props) => (props.active ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none")};
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffedcc;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%; // Make tabs full-width
    text-align: center; // Center-align text for better readability
  }
`;

const TabContent = styled.div`
  // padding: 20px;
  border: 1px solid #d1d9e0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  // margin: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #f9fafc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 15px;
    border: 1px solid #d1d9e0;
    text-align: left;
    color: #333;
  }

  th {
    background-color: rgb(255, 218, 7);
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
  }

  tr:hover {
    background-color: #ffedcc;
  }

  @media (max-width: 768px) {
    th,
    td {
      font-size: 14px; // Reduce font size for small screens
    }
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto; // Enable horizontal scrolling on small screens
`;

interface TableRow {
  name?: string;
  costPerAdult?: string;
  city?: string;
  star4?: string;
  star5?: string;
  label?: string;
  cost4?: string;
  cost5?: string;
}

interface TableData {
  tab1: TableRow[];
  tab2: TableRow[];
  tab3: TableRow[];
}

const TabbedTable: React.FC = () => {
  const [tableData] = useState<TableData>({
    tab1: [
      {
        city: "Kuta",
        star4: "Swiss-Belhotel Rainforest, Kuta\nThe One Legion\nGolden Tulip Jineng Resort",
        star5: "Bintang Bali Resort\nRoyal Tulip Springhill Resort\nPullman Bali Legian Beach",
      },
      {
        city: "Ubud",
        star4: "Alam Puisi Ubud\nAshoka Tree Resort Ubud\nBhumi Linggah",
        star5: "Asvara Villa Ubud\nFuramaXclusive Resort & Villas\nHideaway Village Bali",
      },
      {
        label: "Cost per Adult",
        cost4: "₹35,000",
        cost5: "₹44,000",
      },
      {
        label: "Cost per Child (Without Bed)",
        cost4: "₹21,000",
        cost5: "₹26,400",
      },
      {
        label: "Cost per Child (With Bed)",
        cost4: "₹24,500",
        cost5: "₹30,800",
      },
    ],
    tab2: [
      {
        city: "Kuta",
        star4: "Swiss-Belhotel Rainforest, Kuta\nThe One Legion\nGolden Tulip Jineng Resort",
        star5: "Bintang Bali Resort\nRoyal Tulip Springhill Resort\nPullman Bali Legian Beach",
      },
      {
        city: "Ubud",
        star4: "Alam Puisi Ubud\nAshoka Tree Resort Ubud\nBhumi Linggah",
        star5: "Asvara Villa Ubud\nFuramaXclusive Resort & Villas\nHideaway Village Bali",
      },
      {
        label: "Cost per Adult",
        cost4: "₹65,500",
        cost5: "₹75,000",
      },
      {
        label: "Cost per Child (Without Bed)",
        cost4: "₹54,025",
        cost5: "₹59,250",
      },
      {
        label: "Cost per Child (With Bed)",
        cost4: "₹57,850",
        cost5: "₹64,500",
      },
    ],
    tab3: [
      { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹5000/-" },
      { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹6000/-" },
      { name: "Candle Light Dinner", costPerAdult: "₹3000/-" },
      { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹2960/-" },
      { name: "Nusa Penida Tour with Snorkeling", costPerAdult: "₹7743/-" },
      { name: "Floating Breakfast", costPerAdult: "₹2500/- per couple" },
    ],
  });

  const [activeTab, setActiveTab] = useState<"tab1" | "tab2" | "tab3">("tab1");

  const renderTable = () => {
    const data = tableData[activeTab];

    if (activeTab === "tab3") {
      return (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost Per Adult</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.costPerAdult}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      );
    }

    if (activeTab === "tab1" || activeTab === "tab2") {
      return (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>City</th>
                <th>4 Star Hotels</th>
                <th>5 Star Hotels</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                if (row.city) {
                  return (
                    <tr key={index}>
                      <td>{row.city}</td>
                      <td>{row.star4?.replace(/\n/g, ", ")}</td>
                      <td>{row.star5?.replace(/\n/g, ", ")}</td>
                    </tr>
                  );
                }
                if (row.label) {
                  return (
                    <tr key={index}>
                      <td>{row.label}</td>
                      <td>{row.cost4}</td>
                      <td>{row.cost5}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </Table>
        </TableWrapper>
      );
    }
  };

  return (
    <div>
      <TabsContainer>
        <Tab active={activeTab === "tab1"} onClick={() => setActiveTab("tab1")}>
          Land Package Price
        </Tab>
        <Tab active={activeTab === "tab2"} onClick={() => setActiveTab("tab2")}>
          Package with Flight
        </Tab>
        <Tab active={activeTab === "tab3"} onClick={() => setActiveTab("tab3")}>
          Optional Cost
        </Tab>
      </TabsContainer>
      <TabContent>{renderTable()}</TabContent>
    </div>
  );
};

export default TabbedTable;
