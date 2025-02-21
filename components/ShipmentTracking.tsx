"use client";
import React from "react";

import { CardContent, CardHeader } from "@/components/ui/card";
import {
  CheckIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
  LoaderIcon,
  PackageSearch,
} from "lucide-react";
import { Check, Package, Truck, Home, Box } from "lucide-react";
import { Button } from "./ui/button";

type PackageState =
  | "processed"
  | "transit"
  | "arrived"
  | "out_for_delivery"
  | "delivered";
interface PkgRoute {
  label: string;
  state: PackageState;
  description: string;
  time: string;
  icon: React.ReactNode;
}
const states: PackageState[] = [
  "processed",
  "transit",
  "arrived",
  "out_for_delivery",
  "delivered",
];

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
const ShipmentTracking = () => {
  return (
    <div className="border rounded-[12px]">
      <div className="dotted-down px-3 py-4">
        <div className="flex gap-2 items-center">
          <PackageSearch size={18} className="icon-color" />
          <h4 className="font-[500] text-[15px] text-sidebar-foreground">
            Live tracking
          </h4>
        </div>
      </div>
      <CardContent className="px-2 pt-0 pb-2">
        <div className="w-full p-2 dotted-down text-sidebar-foreground">
          <h6 className="font-[500] text-[17px]">#SVH-001</h6>
          <h5 className="font-[500] text-[13px] text-muted-foreground">
            Shipment details
          </h5>
        </div>
        <div className="w-full p-2 space-y-3 dotted-down text-sidebar-foreground">
          <div>
            <h5 className="font-[500] text-[13px] text-muted-foreground">
              Customer
            </h5>
            <h6 className=" text-[14px]">Donald Trump</h6>
          </div>
          <div>
            <h5 className="font-[500] text-[13px] text-muted-foreground">
              Pickup
            </h5>
            <h6 className=" text-[14px]">California</h6>
          </div>
          <div>
            <h5 className="font-[500] text-[13px] text-muted-foreground">
              Destination
            </h5>
            <h6 className=" text-[14px]">Washington</h6>
          </div>
          <div>
            <h5 className="font-[500] text-[13px] text-muted-foreground">
              Status
            </h5>
            <div className="flex gap-1 items-center">
          <div className="w-1 h-1 mt-[-3px] bg-yellow rounded-full"></div>
          <p className="text-yellow font-[500]  text-[14px]">Pending</p>
        </div>
          </div>
        </div>
        <ShippingTimeline />
      </CardContent>
    </div>
  );
};

export default ShipmentTracking;

const ShippingTimeline = () => {
  const [pkgState, setPkgState] = React.useState<PackageState>("processed");
  const [isAutoCycling, setIsAutoCycling] = React.useState(true);
  const getNextState = (currentState: PackageState): PackageState => {
    const currentIndex = states.indexOf(currentState);
    return currentIndex === states.length - 1
      ? states[0]
      : states[currentIndex + 1];
  };
  // const isNext = (route: PackageState) => {
  //   return states.indexOf(route) <= states.indexOf(pkgState);
  // };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoCycling) {
      interval = setInterval(() => {
        setPkgState((current) => getNextState(current));
      }, 4000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoCycling]);

  const isComplete = (state: PackageState) => {
    return states.indexOf(state) <= states.indexOf(pkgState);
  };
  return (
    <div className=" my-5">
      <div className="space-y-5">
        {routes.map((route, i) => (
          <div key={route.state}>
            <div className="flex  w-full gap-2">
              <div
                className={`relative flex items-center justify-center w-5  h-5 shrink-0 rounded-full 
              `}
              >
                {isComplete(route.state) ? (
                  <CircleCheckIcon size={16} className="icon-color" />
                ) : (
                  <CircleCheckIcon size={16} className="text-[#a3a3a3] bg" />
                )}

                {i < routes.length - 1 && (
                  <div
                    className={`absolute left-1/2 top-5 w-0.5 h-10 -ml-px bg-[#dfdfdf]  dark:bg-[#a3a3a3]
                    `}
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
                {isComplete(route.state) && (
                  <time className="text-muted-foreground  font-[500] text-[13px]">
                    {route.time}
                  </time>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full mt-2">
        <Button className="w-full bg-sidebar-background" variant={"outline"}>
          See tracking details
        </Button>
      </div> */}
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
