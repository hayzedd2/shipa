import { ShipmentAnalyticsChart } from "@/components/ShipmentAnalyticsChart";
import ShipmentsTable from "@/components/ShipmentsTable";
import ShipmentTracking from "@/components/ShipmentTracking";
import ShippingWidgets from "@/components/ShippingWidgets";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <section className="px-3 my-4">
      <div className="w-full mb-2"><h2 className="text-[18px] font-[500]">Shipments Overview</h2></div>
      <div>
        <ShippingWidgets />
      </div>
      <div className="w-full flex gap-2 my-3 flex-wrap lg:flex-nowrap">
        <div className="basis-[100%]  lg:basis-[70%]">    
          <ShipmentAnalyticsChart />
          <ShipmentsTable />
        </div>
        <div className="basis-[100%]  lg:basis-[30%]">
          <ShipmentTracking />
        </div>
      </div>
    </section>
  );
}
