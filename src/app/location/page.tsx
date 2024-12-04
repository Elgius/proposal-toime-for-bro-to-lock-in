import React from "react";
import { CardsOfLocation } from "@/components/locationCards";

function page() {
  return (
    <div className="overflow-hidden min-h-screen bg-gray-500">
      <CardsOfLocation />
    </div>
  );
}

export default page;
