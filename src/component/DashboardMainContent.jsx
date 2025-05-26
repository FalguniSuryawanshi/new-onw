import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="top-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <ActivityFeed />
      <CalendarView />
      <UpcomingSchedule />
    </div>
  );
};

export default DashboardMainContent;
