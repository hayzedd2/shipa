type StatusT = "Delivered" | "Pending" | "Cancelled";

export const GetStatusBadge = (status: StatusT) => {
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
