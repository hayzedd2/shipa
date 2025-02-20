import { ShipmentAnalyticsChart } from "@/components/ShipmentAnalyticsChart";
import ShipmentsTable from "@/components/ShipmentsTable";
import ShipmentTracking from "@/components/ShipmentTracking";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUp,
  PackageCheckIcon,
  PackageIcon,
  PackageXIcon,
  RefreshCcw,
  TrendingDownIcon,
  TrendingUpIcon,
  TruckIcon,
} from "lucide-react";

export default function Home() {
  return (
    <section className="px-3 my-4">
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-3">
        <div className="w-full border rounded-[12px]">
          <div className="p-3 dotted-down flex gap-2 items-center">
            <PackageIcon size={18} className="icon-color" />

            <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
              Total shipments
            </h4>
          </div>
          <div className="px-3 my-3">
            <h2 className="  font-[500] mb-2 text-[1.5rem]">84,630</h2>
            <p className="text-[14px] flex items-center gap-1.5 text-muted-foreground font-[500]">
              {" "}
              <StatusPill type={"up"} digit="12.6%" /> vs last month
            </p>
          </div>
        </div>
        <div className="w-full border rounded-[12px]">
          <div className="p-3 dotted-down flex gap-2 items-center">
            <TruckIcon size={18} className="icon-color" />

            <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
              Shipments in progress
            </h4>
          </div>
          <div className="px-3 my-3">
            <h2 className="  font-[500] mb-2 text-[1.5rem]">9,148</h2>
            <p className="text-[14px] flex items-center gap-1.5 text-muted-foreground font-[500]">
              {" "}
              <StatusPill type={"down"} digit="4.3%" /> vs last month
            </p>
          </div>
        </div>
        <div className="w-full border rounded-[12px]">
          <div className="p-3 dotted-down flex gap-2 items-center">
            <PackageCheckIcon size={18} className="icon-color" />
            <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
              Delivered Shipments
            </h4>
          </div>
          <div className="px-3 my-3">
            <h2 className="  font-[500] mb-2 text-[1.5rem]">75,470</h2>
            <p className="text-[14px] flex items-center gap-1.5 text-muted-foreground font-[500]">
              {" "}
              <StatusPill type={"up"} digit="7.5%" /> vs last month
            </p>
          </div>
        </div>
        <div className="w-full border rounded-[12px]">
          <div className="p-3 dotted-down flex gap-2 items-center">
            <PackageXIcon size={18} className="icon-color" />
            <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
              Cancelled Shipments
            </h4>
          </div>
          <div className="px-3 my-3">
            <h2 className="  font-[500] mb-2 text-[1.5rem]">12</h2>
            <p className="text-[14px] flex items-center gap-1.5 text-muted-foreground font-[500]">
              {" "}
              <StatusPill type={"down"} digit="0.1%" /> vs last month
            </p>
          </div>
        </div>
      </div>
    
        <div className="w-full my-3">
          <ShipmentAnalyticsChart />
        </div>
    
      <div className="flex gap-2 my-3 flex-wrap lg:flex-nowrap">
          <div className="basis-[100%] lg:basis-[70%]">
          <ShipmentsTable />
           
          </div>
          <div className="basis-[100%] lg:basis-[30%]">
          <ShipmentTracking />
          </div>
        </div>
    </section>
  );
}

const StatusPill = ({
  type,
  digit,
}: {
  type: "up" | "down";
  digit: string;
}) => {
  const color = type == "up" ? "text-green" : "text-red";
  const icon =
    type == "up" ? (
      <TrendingUpIcon size={16} className={color} />
    ) : (
      <TrendingDownIcon size={16} className={color} />
    );
  return (
    <span className={`${color} inline-flex gap-1 text-[14px]  font-[600]`}>
      {icon} {digit}
    </span>
  );
};
