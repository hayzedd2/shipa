import { render, screen } from "@testing-library/react";
import ShipmentsTable from "@/components/ShipmentsTable";

const mockState = {
  shipments: [
    {
      customer: "John Smith",
      Pickup: "Seattle",
      destination: "Portland",
      status: "Delivered" as const,
      date: "Nov 28, 2024",
    },
  ],
  addShipment: jest.fn(),
};

// Mock the entire store
jest.mock("@/store/useShipments", () => ({
  useShipments: () => mockState,
}));
describe("ShipmentsTable", () => {
  it("renders shipments", () => {
    render(<ShipmentsTable />);
    expect(screen.getByText("John Smith")).toBeInTheDocument();
  });
});
