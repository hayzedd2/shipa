import { create } from "zustand";

type StatusT = "Delivered" | "Pending" | "Cancelled";
type shipmentsT = {
  customer: string;
  Pickup: string;
  destination: string;
  status: StatusT;
  date: string;
};
const shipments: shipmentsT[] = [
  {
    customer: "John Smith",
    Pickup: "Seattle",
    destination: "Portland",
    status: "Delivered",
    date: "Nov 28, 2024",
  },
  {
    customer: "Sarah Johnson",
    Pickup: "San Francisco",
    destination: "Los Angeles",
    status: "Pending",
    date: "Dec 2, 2024",
  },
  {
    customer: "Michael Brown",
    Pickup: "New York",
    destination: "Boston",
    status: "Cancelled",
    date: "Nov 30, 2024",
  },
  {
    customer: "Emily Davis",
    Pickup: "Miami",
    destination: "Orlando",
    status: "Pending",
    date: "Dec 5, 2024",
  },
  {
    customer: "James Wilson",
    Pickup: "Chicago",
    destination: "Detroit",
    status: "Delivered",
    date: "Nov 29, 2024",
  },
];
interface orderStoreProps {
  shipments: shipmentsT[];
  addShipment: (shipment: shipmentsT) => void;
}

export const useShipments = create<orderStoreProps>((set) => ({
  shipments,
  addShipment: (shipment) => {
    set((state) => ({
      shipments: [...state.shipments, shipment],
    }));
  },
}));
