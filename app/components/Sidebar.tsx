import React from "react";
import { Home, Users, Calendar, Briefcase, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6">Vasitum</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3 text-gray-700">
          <Home size={20} />
          Dashboard
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <Users size={20} />
          Recruitment
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <Calendar size={20} />
          Schedule
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <Briefcase size={20} />
          Employee
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <Settings size={20} />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;