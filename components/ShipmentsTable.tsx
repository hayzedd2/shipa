import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackagePlusIcon, ScrollTextIcon } from "lucide-react";
import { Button } from "./ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
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
const getStatusBadge = (status: StatusT) => {
  switch (status) {
    case "Delivered":
      return (
        <div className="flex gap-1 items-center">
          <div className="w-1 h-1 mt-[-3px] bg-green rounded-full"></div>
          <p className="text-green font-[500]  text-[14px]">{status}</p>
        </div>
      );
    case "Cancelled":
      return (
        <div className="flex gap-1 items-center">
          <div className="w-1 h-1 mt-[-3px] bg-red rounded-full"></div>
          <p className="text-red font-[500]  text-[14px]">{status}</p>
        </div>
      );
    case "Pending":
      return (
        <div className="flex gap-1 items-center">
          <div className="w-1 h-1 mt-[-3px] bg-yellow rounded-full"></div>
          <p className="text-yellow font-[500]  text-[14px]">{status}</p>
        </div>
      );
  }
};
export default function ShipmentsTable() {
  return (
    <div className="border rounded-[12px] p-2">
      <header className="dotted-down px-2 py-3 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <ScrollTextIcon size={18} className="icon-color" />
          <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
            Orders
          </h4>
        </div>
        <Button variant={"ghost"}>
          <PackagePlusIcon className="icon-color" />
          <span className="mt-[2px] text-muted-foreground">Create order</span>
        </Button>
      </header>

      <div className="relative w-full  overflow-x-auto">
        <Table className="w-full table-fixed overflow-x-scroll">
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead >Order ID</TableHead>
              <TableHead >Customer</TableHead>
              <TableHead >Pickup</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{`SVH-${i
                  .toString()
                  .padStart(3, "0")}`}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.Pickup}</TableCell>
                <TableCell>{order.destination}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
