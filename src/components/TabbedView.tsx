"use client";

import { useState } from "react";
import Card from "./Card";
import { DESKTOP_DATA, MOBILE_DATA } from "@/const";
import { CardData } from "@/types";

const TabbedView = () => {
  const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("desktop")}
          className={`px-6 py-3 font-medium w-1/2 text-sm sm:text-xl focus:outline-none cursor-pointer ${
            activeTab === "desktop"
              ? "border-b-2 border-accent text-accent"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Desktop View
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-6 py-3 font-medium w-1/2 text-sm sm:text-xl focus:outline-none cursor-pointer ${
            activeTab === "mobile"
              ? "border-b-2 border-accent text-accent"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Mobile View
        </button>
      </div>

      <div>
        {activeTab === "desktop" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESKTOP_DATA.map((card: CardData) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        )}

        {activeTab === "mobile" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOBILE_DATA.map((card: CardData) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedView;
