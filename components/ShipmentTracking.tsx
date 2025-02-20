"use client";
import React from "react";

import { CardContent, CardHeader } from "@/components/ui/card";
import { PackageSearch } from "lucide-react";
import { Check, Package, Truck, Home, Box } from "lucide-react";

const ShipmentTracking = () => {
  return (
    <div className="border rounded-[12px]">
      <div className="dotted-down px-5 py-4">
        <div className="flex gap-2 items-center">
          <PackageSearch size={18} className="icon-color" />
          <h4 className="font-[500] text-[15px] text-sidebar-foreground">
            Live tracking
          </h4>
        </div>
      </div>
      <CardContent className="px-2 pt-3">
        <div className="bg-red-800 h-[14rem] rounded-md w-full"></div>
        <ShippingTimeline />
      </CardContent>
    </div>
  );
};

export default ShipmentTracking;

const ShippingTimeline = () => {
  type PackageState =
    | "processed"
    | "transit"
    | "arrived"
    | "out_for_delivery"
    | "delivered";
  const [pkgState, setPkgState] = React.useState<PackageState>("processed");

  interface PkgRoute {
    label: string;
    state: PackageState;
    description: string;
    time: string;
    icon: React.ReactNode;
  }

  const routes: PkgRoute[] = [
    {
      label: "Package Processed",
      state: "processed",
      description: "Seller's warehouse",
      time: "08:23 AM",
      icon: <Box className="w-6 h-6" />,
    },
    {
      label: "In Transit",
      state: "transit",
      description: "Package is on the way",
      time: "10:45 AM",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      label: "Arrived at Facility",
      state: "arrived",
      description: "Local distribution center",
      time: "2:30 PM",
      icon: <Package className="w-6 h-6" />,
    },
    {
      label: "Out for Delivery",
      state: "out_for_delivery",
      description: "With local courier",
      time: "9:15 AM",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      label: "Delivered",
      state: "delivered",
      description: "Package delivered",
      time: "11:30 AM",
      icon: <Home className="w-6 h-6" />,
    },
  ];
  const isComplete = (state: PackageState) => {
    const states: PackageState[] = [
      "processed",
      "transit",
      "arrived",
      "out_for_delivery",
      "delivered",
    ];
    return states.indexOf(state) <= states.indexOf(pkgState);
  };
  return (
    <div className="space-y-5 mt-4">
      {routes.map((route, i) => (
        <div key={route.state}>
          <div className="flex  w-full gap-2">
            <div
              className={`relative flex items-center justify-center w-5  h-5 shrink-0 rounded-full 
               ${
                isComplete(route.state) ? "bg-yellow-300":"bg-gray-200"
               } `}
            >
              <div className="w-3 h-3 rounded-full bg-sidebar-background  "></div>
              {i < routes.length - 1 && (
                <div
                  className={`absolute left-1/2 top-5 w-0.5 h-16 -ml-px
                    ${
                      isComplete(route.state)
                        ? "bg-yellow-300"
                        : "bg-gray-200"
                    }`}
                />
              )}
            </div>
            <div className="flex mt-[-1px] items-center w-full justify-between">
              <div>
                <h3
                  className={`text-base font-[500] text-sidebar-foreground
                 `}
                >
                  {route.label}
                </h3>
                <p className="text-muted-foreground mt-[-1px] font-[500] text-[13px]">
                  {route.description}
                </p>
              </div>
              <time className="text-muted-foreground  font-[500] text-[13px]">
                {route.time}
              </time>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="mt-8 space-x-2">
        {routes.map((route) => (
          <button
            key={route.state}
            onClick={() => setPkgState(route.state)}
            className={`px-4 py-2 rounded
              ${
                pkgState === route.state
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            Set to {route.label}
          </button>
        ))}
      </div> */}
    </div>
  );
};
