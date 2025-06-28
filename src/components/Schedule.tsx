import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, Circle, Play, ChevronDown, ChevronUp, Trophy, Users } from 'lucide-react';
import { matches, teams } from '../data/tournamentData';

const Schedule: React.FC = () => {
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

  const getTeam = (teamId: string) => teams.find(t => t.id === teamId);

  // Get player object from ID (like "A1", "B3", etc.)
  const getPlayer = (playerId: string) => {
    for (const team of teams) {
      const player = team.players.find(p => p.id === playerId);
      if (player) return { ...player, team };
    }
    return null;
  };

  const groupedMatches = matches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof matches>);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateShort = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="text-green-500 flex-shrink-0\" size={18} />;
      case 'live': return <Play className="text-red-500 animate-pulse flex-shrink-0\" size={18} />;
      default: return <Circle className="text-gray-400 flex-shrink-0" size={18} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-green-200 bg-green-50';
      case 'live': return 'border-red-200 bg-red-50 shadow-lg';
      default: return 'border-gray-200 bg-white';
    }
  };

  const getRoundColor = (round: string) => {
    switch (round) {
      case 'Final': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Semi Final': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'Quarter Final': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const toggleDay = (date: string) => {
    setExpandedDays(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  const totalMatches = matches.length;
  const completedMatches = matches.filter(m => m.status === 'completed').length;
  const liveMatches = matches.filter(m => m.status === 'live').length;
  const upcomingMatches = matches.filter(m => m.status === 'upcoming').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
            <Trophy className="text-white" size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Tournament Schedule
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Complete fixture list for all tournament matches across {Object.keys(groupedMatches).length} days
          </p>
        </div>

        {/* Quick Stats - Mobile Optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 lg:p-6 text-white text-center">
            <CheckCircle size={24} className="mx-auto mb-2 lg:mb-3" />
            <h3 className="text-sm lg:text-lg font-bold">Completed</h3>
            <p className="text-xl lg:text-2xl font-bold">{completedMatches}</p>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-4 lg:p-6 text-white text-center">
            <Play size={24} className="mx-auto mb-2 lg:mb-3" />
            <h3 className="text-sm lg:text-lg font-bold">Live Now</h3>
            <p className="text-xl lg:text-2xl font-bold">{liveMatches}</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-4 lg:p-6 text-white text-center">
            <Clock size={24} className="mx-auto mb-2 lg:mb-3" />
            <h3 className="text-sm lg:text-lg font-bold">Upcoming</h3>
            <p className="text-xl lg:text-2xl font-bold">{upcomingMatches}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-4 lg:p-6 text-white text-center">
            <Calendar size={24} className="mx-auto mb-2 lg:mb-3" />
            <h3 className="text-sm lg:text-lg font-bold">Total Days</h3>
            <p className="text-xl lg:text-2xl font-bold">{Object.keys(groupedMatches).length}</p>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-4 lg:space-y-6">
          {Object.entries(groupedMatches).map(([date, dayMatches]) => {
            const isExpanded = expandedDays[date] || false; // Default to collapsed
            
            return (
              <div key={date} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Date Header - Collapsible */}
                <button
                  onClick={() => toggleDay(date)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 lg:p-6 text-left hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold flex items-center gap-2 mb-1">
                        <Calendar size={20} className="flex-shrink-0" />
                        <span className="hidden sm:inline">{formatDate(date)}</span>
                        <span className="sm:hidden">{formatDateShort(date)}</span>
                      </h3>
                      <p className="text-blue-100 text-sm lg:text-base">
                        {dayMatches.length} matches scheduled
                      </p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="flex-shrink-0" size={24} />
                    )}
                  </div>
                </button>

                {/* Matches - Collapsible Content */}
                {isExpanded && (
                  <div className="p-4 lg:p-6">
                    <div className="space-y-4">
                      {dayMatches.map((match) => {
                        const playerA = getPlayer(match.teamA);
                        const playerB = getPlayer(match.teamB);

                        return (
                          <div
                            key={match.id}
                            className={`${getStatusColor(match.status)} rounded-xl p-4 lg:p-6 border-2 transition-all duration-300 hover:shadow-md`}
                          >
                            {/* Match Header - Mobile Responsive */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                              <div className="flex items-center gap-3">
                                {getStatusIcon(match.status)}
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Clock size={16} className="flex-shrink-0" />
                                  <span className="font-medium text-sm lg:text-base">{match.time}</span>
                                </div>
                                {match.court && (
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin size={16} className="flex-shrink-0" />
                                    <span className="text-sm lg:text-base">{match.court}</span>
                                  </div>
                                )}
                              </div>
                              
                              <div className={`${getRoundColor(match.round)} text-white px-3 py-1 rounded-full text-xs lg:text-sm font-medium flex-shrink-0`}>
                                {match.round}
                              </div>
                            </div>

                            {/* Players - Responsive Layout */}
                            <div className="space-y-4 lg:space-y-0">
                              {/* Mobile: Stacked Layout */}
                              <div className="lg:hidden">
                                {/* Player A */}
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${playerA?.team?.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                      {playerA?.team?.id}
                                    </div>
                                    <span className="font-medium text-gray-800 truncate">{playerA?.name || 'TBD'}</span>
                                  </div>
                                  {match.status === 'completed' && (
                                    <span className="text-xl font-bold text-blue-600 flex-shrink-0">{match.scoreA}</span>
                                  )}
                                </div>

                                <div className="text-center py-2">
                                  <span className="text-gray-400 font-bold text-lg">VS</span>
                                </div>

                                {/* Player B */}
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${playerB?.team?.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                      {playerB?.team?.id}
                                    </div>
                                    <span className="font-medium text-gray-800 truncate">{playerB?.name || 'TBD'}</span>
                                  </div>
                                  {match.status === 'completed' && (
                                    <span className="text-xl font-bold text-blue-600 flex-shrink-0">{match.scoreB}</span>
                                  )}
                                </div>
                              </div>

                              {/* Desktop: Horizontal Layout */}
                              <div className="hidden lg:flex items-center justify-center gap-8">
                                <div className="flex items-center gap-4 flex-1 justify-end">
                                  <span className="font-medium text-gray-800 text-right">{playerA?.name || 'TBD'}</span>
                                  <div className={`w-12 h-12 bg-gradient-to-r ${playerA?.team?.color} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0`}>
                                    {playerA?.team?.id}
                                  </div>
                                  {match.status === 'completed' && (
                                    <span className="text-2xl font-bold text-blue-600 w-8 text-center">{match.scoreA}</span>
                                  )}
                                </div>

                                <div className="flex-shrink-0">
                                  <span className="text-gray-400 font-bold text-xl">VS</span>
                                </div>

                                <div className="flex items-center gap-4 flex-1">
                                  {match.status === 'completed' && (
                                    <span className="text-2xl font-bold text-blue-600 w-8 text-center">{match.scoreB}</span>
                                  )}
                                  <div className={`w-12 h-12 bg-gradient-to-r ${playerB?.team?.color} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0`}>
                                    {playerB?.team?.id}
                                  </div>
                                  <span className="font-medium text-gray-800">{playerB?.name || 'TBD'}</span>
                                </div>
                              </div>
                            </div>

                            {/* Match Details */}
                            {match.status === 'completed' && (
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
                                  <span className="text-gray-600">Match Duration: 28 minutes</span>
                                  <span className={`font-medium ${
                                    (match.scoreA || 0) > (match.scoreB || 0) ? 'text-green-600' : 'text-blue-600'
                                  }`}>
                                    Winner: {(match.scoreA || 0) > (match.scoreB || 0) ? playerA?.name : playerB?.name}
                                  </span>
                                </div>
                              </div>
                            )}

                            {match.status === 'live' && (
                              <div className="mt-4 pt-4 border-t border-red-200">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                  <span className="text-red-600 font-medium animate-pulse flex items-center gap-2">
                                    <Play size={16} />
                                    Live Match in Progress
                                  </span>
                                  <span className="text-sm text-gray-600">Game 3 of 5</span>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tournament Progress */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="text-blue-600" />
            Tournament Progress
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm lg:text-base">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-medium">{completedMatches} of {totalMatches} matches completed</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 lg:h-3">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 lg:h-3 rounded-full transition-all duration-300"
                style={{ width: `${(completedMatches / totalMatches) * 100}%` }}
              ></div>
            </div>
            
            <div className="text-center text-lg lg:text-xl font-bold text-gray-800">
              {Math.round((completedMatches / totalMatches) * 100)}% Complete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;