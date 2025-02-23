import { render, screen, fireEvent } from "@testing-library/react";
import ShipmentsTable from "@/components/ShipmentsTable";
import userEvent from "@testing-library/user-event";

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

const notificationMock = {
    notifications:[
        {
            message:"Your order was created succesfully with order number SVH-000",
            type: "success" as const,

        }
    ],
    sendNotification:jest.fn(),
    deleteAllNotifications: jest.fn()

}

jest.mock("@/store/useShipments", () => ({
  useShipments: () => mockState,
}));

// jest.mock("@/store/useNotifications", () => ({
//   useNotifications: () => notificationMock,
// }));

describe("ShipmentsTable", () => {
  it("renders shipments data correctly", () => {
    render(<ShipmentsTable />);
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("Seattle")).toBeInTheDocument();
    expect(screen.getByText("Portland")).toBeInTheDocument();
    expect(screen.getByText("Nov 28, 2024")).toBeInTheDocument();
  });

  it("renders shipment ID with correct format", () => {
    render(<ShipmentsTable />);
    expect(screen.getByText("SVH-000")).toBeInTheDocument();
  });

  it("opens modal when Create Shipment button is clicked", () => {
    render(<ShipmentsTable />);
    const createButton = screen.getByTestId("create-shipment");
    fireEvent.click(createButton);
    expect(screen.getByTestId("add-shipment-label")).toBeInTheDocument();
  });

  

  it("adds new shipment when form is submitted", async () => {
    const user = userEvent.setup();
    render(<ShipmentsTable />);

    // Open modal
    fireEvent.click(screen.getByTestId("create-shipment"));

    // Fill in the form
    await user.type(screen.getByPlaceholderText("John doe"), "Test Customer");
    await user.type(screen.getByPlaceholderText("Boston"), "Test Pickup");
    await user.type(
      screen.getByPlaceholderText("California"),
      "Test Destination"
    );

    // Submit form
    fireEvent.submit(screen.getByTestId("add-shipment-form"));

    // Verify addShipment was called with correct data
    expect(mockState.addShipment).toHaveBeenCalledWith({
      customer: "Test Customer",
      Pickup: "Test Pickup",
      destination: "Test Destination",
      status: "Pending",
      date: expect.any(String),
    });
  });

  it("ensures form is not submitted when the right validation is not me", async () => {
    render(<ShipmentsTable />);
    fireEvent.click(screen.getByTestId("create-shipment"));

    const submitButton = screen.getByTestId("submit-shipment");
    fireEvent.click(submitButton);

    // Check if required field validations are working
    expect(screen.getByPlaceholderText("John doe")).toBeInvalid();
    expect(screen.getByPlaceholderText("Boston")).toBeInvalid();
    expect(screen.getByPlaceholderText("California")).toBeInvalid();
  });

  it("displays correct table headers", () => {
    render(<ShipmentsTable />);
    const expectedHeaders = [
      "Shipment ID",
      "Customer",
      "Pickup",
      "Destination",
      "Date",
      "Status",
    ];

    expectedHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("displays table caption", () => {
    render(<ShipmentsTable />);
    expect(
      screen.getByText("A list of your recent shipments.")
    ).toBeInTheDocument();
  });
});
