import React from "react";
import StatsCards from "./overview/StatsCards";
import UpcomingMeals from "./overview/UpcomingMeals";
import MenuItemsTable from "./overview/MenuItemsTable";
import RecentUpdates from "./overview/RecentUpdates";
import AllergyAlerts from "./overview/AllergyAlerts";
import LowStockItems from "./overview/LowStockItems";

const OverviewTab = () => {
  return (
    <>
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <UpcomingMeals />
          <MenuItemsTable />
        </div>
        <div className="space-y-6">
          <AllergyAlerts />
          <LowStockItems />
          <RecentUpdates />
        </div>
      </div>
    </>
  );
};

export default OverviewTab;