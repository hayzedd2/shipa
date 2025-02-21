import { create } from "zustand";

type StatusT = "Delivered" | "Pending" | "Cancelled";
type OrderT = {
  customer: string;
  Pickup: string;
  destination: string;
  status: StatusT;
  date: string;
};
const orders: OrderT[] = [
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
  orders: OrderT[];
  addOrder: (order: OrderT) => void;
}

export const useOrders = create<orderStoreProps>((set) => ({
  orders,
  addOrder: (order) => {
    set((state) => ({
      orders: [...state.orders, order],
    }));
  },
}));
