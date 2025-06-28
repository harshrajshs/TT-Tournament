import React from 'react';
import { Trophy, Calendar, Users, Target } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'live', label: 'Live Matches', icon: Target },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'bracket', label: 'Tournament', icon: Trophy },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'teams', label: 'Teams', icon: Users }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            SRIJAN HOME SCHOOL
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Table Tennis Tournament 2025
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-3 rounded-full"></div>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-900 shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;