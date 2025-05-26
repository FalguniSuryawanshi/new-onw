import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import AnatomySection from './components/AnatomySection';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
        <h2>Anatomy Overview</h2>
        <AnatomySection />
      </div>
    </div>
  );
}

export default App;
