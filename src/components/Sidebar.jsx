import React from "react";

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all text-sm font-medium 
      ${active ? "bg-white text-[#4e54c8] shadow-md" : "text-gray-700 hover:bg-white hover:shadow"}`
    }
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-[#f8f9ff] px-6 py-8 shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold text-[#4e54c8] mb-10">
        Healthcare<span className="text-black">.</span>
      </h2>

      <nav className="flex flex-col space-y-2 flex-grow">
        <SidebarItem icon="📊" label="Dashboard" active />
        <SidebarItem icon="📜" label="History" />
        <SidebarItem icon="📆" label="Calendar" />
        <SidebarItem icon="📋" label="Appointments" />
        <SidebarItem icon="📈" label="Statistics" />
        <div className="border-t pt-4 mt-4">
          <SidebarItem icon="💬" label="Chat" />
          <SidebarItem icon="📞" label="Support" />
        </div>
      </nav>

      <div className="border-t pt-4">
        <SidebarItem icon="⚙️" label="Setting" />
      </div>
    </aside>
  );
};

export default Sidebar;
