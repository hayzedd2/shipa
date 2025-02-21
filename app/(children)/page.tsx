import { ShipmentAnalyticsChart } from "@/components/ShipmentAnalyticsChart";
import ShipmentsTable from "@/components/ShipmentsTable";
import ShipmentTracking from "@/components/ShipmentTracking";
import ShippingWidgets from "@/components/ShippingWidgets";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="px-3 my-4">
      <div>
        <ShippingWidgets />
      </div>
      <div className="w-full flex gap-2 my-3 flex-wrap md:flex-nowrap">
        <div className="basis-[100%]  md:basis-[70%]">
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
