import React, { useState } from 'react';
import Header from './components/Header';
import LiveMatches from './components/LiveMatches';
import Leaderboard from './components/Leaderboard';
import TournamentBracket from './components/TournamentBracket';
import Schedule from './components/Schedule';
import Teams from './components/Teams';

function App() {
  const [activeTab, setActiveTab] = useState('live');

  const renderContent = () => {
    switch (activeTab) {
      case 'live':
        return <LiveMatches />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'bracket':
        return <TournamentBracket />;
      case 'schedule':
        return <Schedule />;
      case 'teams':
        return <Teams />;
      default:
        return <LiveMatches />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">SRIJAN HOME SCHOOL</h3>
          <p className="text-gray-400 mb-4">Table Tennis Tournament 2025</p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-sm">
            © 2025 Srijan Home School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;