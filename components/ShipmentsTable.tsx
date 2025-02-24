"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackagePlusIcon, ScrollTextIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Modal from "./Modal";
import { useShipments } from "@/store/useShipments";
import { GetStatusBadge } from "@/helpers/getStatusBadge";
import { useNotifications } from "@/store/useNotifications";

export default function ShipmentsTable() {
  const [openModal, setOpenModal] = useState(false);
  const { shipments, addShipment } = useShipments();
  const sendNotification = useNotifications((s) => s.sendNotification);
  const [customerName, setCustomerName] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex justify-between gap-1 items-center">
          <h4
            data-testid="add-shipment-label"
            className="text-[17px] font-[500]"
          >
            Add Shipment
          </h4>

          <Button
            variant="ghost"
            aria-label="close-btn"
            name="close-btn"
            onClick={() => setOpenModal(false)}
          >
            <XIcon />
          </Button>
        </div>
        <form
          data-testid="add-shipment-form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setOpenModal(false);
            addShipment({
              customer: customerName,
              Pickup: pickup,
              destination: destination,
              status: "Pending",
              date: new Date().toDateString(),
            });
            sendNotification({
              message: `Your shipment was created succesfully with shipment ID SVH-${shipments.length
                .toString()
                .padStart(3, "0")}`,
              type: "success",
            });
          }}
          className="mt-3 space-y-4"
        >
          <div className=" flex flex-col gap-1">
            <label htmlFor="name" className="text-[15px]">
              Customer name
            </label>
            <input
              type="text"
              value={customerName}
              required
              onChange={(e) => setCustomerName(e.target.value)}
              className="rounded-lg border bg-sidebar-background px-3 py-2"
              placeholder="John doe"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="pickup" className="text-[15px]">
              Pickup
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
              className="rounded-lg border bg-sidebar-background px-3 py-2 text-[14px]"
              placeholder="Boston"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="destination" className="text-[15px]">
              Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="rounded-lg border bg-sidebar-background px-3 py-2 text-[14px]"
              placeholder="California"
            />
          </div>

          <div className="flex w-full justify-end">
            <Button data-testid="submit-shipment">Add Shipment</Button>
          </div>
        </form>
      </Modal>
      <div className="border rounded-[12px] p-2 mt-3">
        <header className="dotted-down px-2 py-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <ScrollTextIcon size={18} className="icon-color" />
            <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
              Shipments
            </h4>
          </div>
          <Button
            data-testid="create-shipment"
            variant={"ghost"}
            onClick={() => setOpenModal(true)}
          >
            <PackagePlusIcon className="icon-color" />
            <span className="mt-[2px] text-muted-foreground">
              Create Shipment
            </span>
          </Button>
        </header>{" "}
        <Table>
          <TableCaption>A list of your recent shipments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead  className="hidden lg:block">ID</TableHead>
              <TableHead >Customer</TableHead>
              <TableHead >Pickup</TableHead>
              <TableHead >Destination</TableHead>
              <TableHead className="hidden lg:block" >Date</TableHead>
              <TableHead >Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((order, i) => (
              <TableRow key={i}>
                <TableCell  className="hidden lg:flex">{`SVH-${i
                  .toString()
                  .padStart(3, "0")}`}</TableCell>
                <TableCell >
                  {order.customer}
                </TableCell>
                <TableCell >
                  {order.Pickup}
                </TableCell>
                <TableCell >
                  {order.destination}
                </TableCell>
                <TableCell className="hidden lg:flex" >
                  {order.date}
                </TableCell>
                <TableCell >
                  {GetStatusBadge(order.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
