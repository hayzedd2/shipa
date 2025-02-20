"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartLineIcon } from "lucide-react";
const chartData = [
  { date: "2024-05-15", in_progress: 473, delivered: 380 },
  { date: "2024-05-16", in_progress: 338, delivered: 400 },
  { date: "2024-05-17", in_progress: 499, delivered: 420 },
  { date: "2024-05-18", in_progress: 315, delivered: 350 },
  { date: "2024-05-19", in_progress: 235, delivered: 180 },
  { date: "2024-05-20", in_progress: 177, delivered: 230 },
  { date: "2024-05-21", in_progress: 82, delivered: 140 },
  { date: "2024-05-22", in_progress: 81, delivered: 120 },
  { date: "2024-05-23", in_progress: 252, delivered: 290 },
  { date: "2024-05-24", in_progress: 294, delivered: 220 },
  { date: "2024-05-25", in_progress: 201, delivered: 250 },
  { date: "2024-05-26", in_progress: 213, delivered: 170 },
  { date: "2024-05-27", in_progress: 420, delivered: 460 },
  { date: "2024-05-28", in_progress: 233, delivered: 190 },
  { date: "2024-05-29", in_progress: 78, delivered: 130 },
  { date: "2024-05-30", in_progress: 340, delivered: 280 },
  { date: "2024-05-31", in_progress: 178, delivered: 230 },
  { date: "2024-06-01", in_progress: 178, delivered: 200 },
  { date: "2024-06-02", in_progress: 470, delivered: 410 },
  { date: "2024-06-03", in_progress: 103, delivered: 160 },
  { date: "2024-06-04", in_progress: 439, delivered: 380 },
  { date: "2024-06-05", in_progress: 88, delivered: 140 },
  { date: "2024-06-06", in_progress: 294, delivered: 250 },
  { date: "2024-06-07", in_progress: 323, delivered: 370 },
  { date: "2024-06-08", in_progress: 385, delivered: 320 },
  { date: "2024-06-09", in_progress: 438, delivered: 480 },
  { date: "2024-06-10", in_progress: 155, delivered: 200 },
  { date: "2024-06-11", in_progress: 92, delivered: 150 },
  { date: "2024-06-12", in_progress: 492, delivered: 420 },
  { date: "2024-06-13", in_progress: 81, delivered: 130 },
  { date: "2024-06-14", in_progress: 426, delivered: 380 },
  { date: "2024-06-15", in_progress: 307, delivered: 350 },
  { date: "2024-06-16", in_progress: 371, delivered: 310 },
  { date: "2024-06-17", in_progress: 475, delivered: 520 },
  { date: "2024-06-18", in_progress: 107, delivered: 170 },
  { date: "2024-06-19", in_progress: 341, delivered: 290 },
  { date: "2024-06-20", in_progress: 408, delivered: 450 },
  { date: "2024-06-21", in_progress: 169, delivered: 210 },
  { date: "2024-06-22", in_progress: 317, delivered: 270 },
  { date: "2024-06-23", in_progress: 480, delivered: 530 },
  { date: "2024-06-24", in_progress: 132, delivered: 180 },
  { date: "2024-06-25", in_progress: 141, delivered: 190 },
  { date: "2024-06-26", in_progress: 434, delivered: 380 },
  { date: "2024-06-27", in_progress: 448, delivered: 490 },
  { date: "2024-06-28", in_progress: 149, delivered: 200 },
  { date: "2024-06-29", in_progress: 103, delivered: 160 },
  { date: "2024-06-30", in_progress: 446, delivered: 400 },
];

const chartConfig = {
  data: {
    label: "Analytics",
  },
  delivered: {
    label: "Delivered",
    color: "var(--chart-color-1)",
  },
  in_progress: {
    label: "In progress",
    color: "var(--chart-color-2)",
  },
} satisfies ChartConfig;

export function ShipmentAnalyticsChart() {
  const [timeRange, setTimeRange] = React.useState("7d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <div className="border rounded-[12px]">
      <div className="flex dotted-down px-5 py-3 items-center justify-between flex-wrap">
        <div className="flex gap-2  items-center">
          <ChartLineIcon size={18} className="icon-color" />
          <h4 className="font-[500] text-[15px] text-sidebar-foreground mt-[2px]">
            Shipments analytics
          </h4>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDelivered" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-delivered)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-delivered)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillIn_progress" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-in_progress)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-in_progess)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            {/* <YAxis tickMargin={30} tickLine={false} axisLine={false} /> */}
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="delivered"
              type="natural"
              fill="url(#fillDelivered)"
              stroke="var(--color-delivered)"
              stackId="a"
            />
            <Area
              dataKey="in_progress"
              type="natural"
              fill="url(#fillIn_progress)"
              stroke="var(--color-in_progress)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
