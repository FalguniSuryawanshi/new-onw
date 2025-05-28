import React from "react";

import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

import bodyImage from "../assets/body.png";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold shadow-md">
            F
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          {/* Body + Health Status Cards */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Body Image */}
            <img
              src={bodyImage}
              alt="Body Diagram"
              className="w-full max-w-md rounded-xl shadow-md object-contain"
            />

            {/* Health Status Cards (Lungs, Teeth, Bone) */}
            <HealthStatusCards />
          </div>

          {/* Activity Feed Graph */}
          <ActivityFeed />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
