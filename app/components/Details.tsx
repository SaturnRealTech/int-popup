import React from "react";
import { AreaChart, Wallet } from "lucide-react";

export default function Details() {
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-1 items-center border-gray-400 border-r-2">
        <div className="flex flex-row gap-2 items-center">
          <h4 className="text-lg font-medium text-yellow-700">₹ 1.4 Cr.</h4>
        </div>
        <p className="text-xs text-gray-500">(₹ 6,990/ Sq. Ft.)</p>
      </div>
      <div className="flex flex-col gap-1 items-center border-gray-400 border-r-2">
        <div className="flex flex-row gap-3 items-center">
          <Wallet size={20} />
          <h4 className="text-lg font-medium text-yellow-700">Plot Size</h4>
        </div>
        <p className="text-xs text-gray-500">1800 to 7,200 Sq. Ft.</p>
      </div>
      <div className="flex flex-col gap-1 items-center border-gray-400 border-r-2">
        <div className="flex flex-row gap-2 items-center">
          <AreaChart size={20} />
          <h4 className="text-lg font-medium text-yellow-700">Area</h4>
        </div>
        <p className="text-xs text-gray-500">115 Acres</p>
      </div>
    </div>
  );
}
