import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import AnatomySection from './components/AnatomySection';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      {/* Sidebar Section */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top Header */}
        <Header />

        {/* Dashboard Cards and Data */}
        <DashboardMainContent />

        {/* Anatomy Overview Section */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Anatomy Overview</h2>
        <div className="bg-white p-5 rounded-xl shadow-md">
          <AnatomySection />
        </div>

        {/* Tailwind Check Box */}
        <div className="text-2xl font-bold text-blue-600 p-4 bg-white rounded-lg shadow-md mt-6">
          Tailwind is working!
        </div>

        {/* Calendar View Section */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Appointments Calendar</h2>
        <div className="bg-white p-5 rounded-xl shadow-md">
          <CalendarView />
        </div>
      </div>
    </div>
  );
}

export default App;
