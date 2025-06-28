import React, { useState, useEffect } from 'react';
import { Play, Clock, Users, Trophy } from 'lucide-react';
import { matches, teams } from '../data/tournamentData';
import { Match } from '../types/tournament';

const LiveMatches: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showAllFinished, setShowAllFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const parseMatchTime = (match: Match): [Date, Date] => {
    const start = new Date(`${match.date}T${match.time}`);
    const end = new Date(start.getTime() + 10 * 60 * 1000);
    return [start, end];
  };

  const getMatchStatus = (match: Match): 'live' | 'upcoming' | 'finished' => {
    const [start, end] = parseMatchTime(match);
    if (currentTime >= start && currentTime <= end) return 'live';
    if (currentTime < start) return 'upcoming';
    return 'finished';
  };

  const getPlayerAndTeam = (playerId: string) => {
    for (const team of teams) {
      const player = team.players.find(p => p.id === playerId);
      if (player) return { player, team };
    }
    return null;
  };

  const MatchCard: React.FC<{ match: Match; status: string }> = ({ match, status }) => {
    const infoA = getPlayerAndTeam(match.teamA);
    const infoB = getPlayerAndTeam(match.teamB);
    if (!infoA || !infoB) return null;

    const { player: playerA, team: teamA } = infoA;
    const { player: playerB, team: teamB } = infoB;

    const isLive = status === 'live';

    return (
      <div className={`bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border-2 transition-all duration-300 w-full ${
        isLive ? 'border-red-500 shadow-red-200' : 'border-gray-200 hover:shadow-xl'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className={`flex items-center gap-1 sm:gap-2 ${isLive ? 'text-red-600' : 'text-gray-600'}`}>
            {isLive ? <Play size={16} className="animate-pulse sm:w-5 sm:h-5" /> : <Clock size={16} className="sm:w-5 sm:h-5" />}
            <span className="font-medium text-xs sm:text-sm uppercase">{status}</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            <div className="block sm:hidden">{match.time}</div>
            <div className="hidden sm:block">{match.date} • {match.time}</div>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden sm:flex items-center justify-between gap-3 lg:gap-4">
          <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
            <div className={`w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r ${teamA.color} rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-lg flex-shrink-0`}>
              {teamA.id}
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="font-semibold text-gray-800 truncate text-sm lg:text-base">{playerA.name}</p>
              <p className="text-xs lg:text-sm text-gray-500 truncate">{teamA.name}</p>
              {isLive && <p className="text-lg lg:text-2xl font-bold text-blue-600">{match.scoreA}</p>}
            </div>
          </div>

          <div className="text-lg lg:text-2xl font-bold text-gray-400 mx-1 lg:mx-2 flex-shrink-0">VS</div>

          <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
            <div className="text-right min-w-0 flex-1">
              <p className="font-semibold text-gray-800 truncate text-sm lg:text-base">{playerB.name}</p>
              <p className="text-xs lg:text-sm text-gray-500 truncate">{teamB.name}</p>
              {isLive && <p className="text-lg lg:text-2xl font-bold text-blue-600">{match.scoreB}</p>}
            </div>
            <div className={`w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r ${teamB.color} rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-lg flex-shrink-0`}>
              {teamB.id}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className={`w-8 h-8 bg-gradient-to-r ${teamA.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {teamA.id}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-800 truncate text-sm">{playerA.name}</p>
                <p className="text-xs text-gray-500 truncate">{teamA.name}</p>
              </div>
            </div>
            {isLive && <p className="text-xl font-bold text-blue-600 flex-shrink-0">{match.scoreA}</p>}
          </div>

          <div className="text-center text-gray-400 font-bold text-sm">VS</div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className={`w-8 h-8 bg-gradient-to-r ${teamB.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {teamB.id}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-800 truncate text-sm">{playerB.name}</p>
                <p className="text-xs text-gray-500 truncate">{teamB.name}</p>
              </div>
            </div>
            {isLive && <p className="text-xl font-bold text-blue-600 flex-shrink-0">{match.scoreB}</p>}
          </div>
        </div>

        {/* Live Match Duration */}
        {isLive && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Match Duration</span>
              <span className="text-sm sm:text-lg font-mono font-bold text-green-600">
                {Math.floor((currentTime.getTime() - parseMatchTime(match)[0].getTime()) / 60000)
                  .toString()
                  .padStart(2, '0')}:00
              </span>
            </div>
          </div>
        )}

        {/* Finished Match Result */}
        {status === 'finished' && match.scoreA !== match.scoreB && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 text-center">
            <div className="text-green-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2">
              <Trophy size={16} className="text-yellow-500" />
              <span className="truncate">
                {match.scoreA > match.scoreB
                  ? `${playerA.name} won by ${match.scoreA - match.scoreB}`
                  : `${playerB.name} won by ${match.scoreB - match.scoreA}`}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const matchesByStatus = (status: 'live' | 'upcoming' | 'finished') =>
    matches.filter(match => getMatchStatus(match) === status);

  const getFinishedMatches = () => {
    const finishedMatches = matchesByStatus('finished');
    // Get the latest finished matches (most recent ones)
    return finishedMatches.slice(-3).reverse();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Live Tournament Status</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Current Time: <span className="font-mono font-semibold">{currentTime.toLocaleTimeString()}</span>
            </p>
          </div>

          {/* Live Matches Section */}
          {matchesByStatus('live').length > 0 ? (
            <div className="mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6 flex items-center gap-2">
                <Play className="animate-pulse w-5 h-5 sm:w-6 sm:h-6" />
                Live Matches
              </h3>
              <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {matchesByStatus('live').map(match => (
                  <MatchCard key={match.id} match={match} status="live" />
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6 lg:p-8 text-center mb-8 sm:mb-10">
              <Clock size={32} className="mx-auto text-yellow-500 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-2">No Live Matches</h3>
              <p className="text-sm sm:text-base text-yellow-700">Check back soon for live tournament action!</p>
            </div>
          )}

          {/* Upcoming Matches Section */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              Upcoming Matches
            </h3>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {(showAllUpcoming
                ? matchesByStatus('upcoming')
                : matchesByStatus('upcoming').slice(0, 6)
              ).map(match => (
                <MatchCard key={match.id} match={match} status="upcoming" />
              ))}
            </div>
            {matchesByStatus('upcoming').length > 6 && (
              <div className="text-center mt-4 sm:mt-6">
                <button
                  onClick={() => setShowAllUpcoming(!showAllUpcoming)}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  {showAllUpcoming ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          {/* Finished Matches Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 sm:mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              Finished Matches
            </h3>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {(showAllFinished
                ? matchesByStatus('finished')
                : getFinishedMatches()
              ).map(match => (
                <MatchCard key={match.id} match={match} status="finished" />
              ))}
            </div>
            {matchesByStatus('finished').length > 3 && (
              <div className="text-center mt-4 sm:mt-6">
                <button
                  onClick={() => setShowAllFinished(!showAllFinished)}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  {showAllFinished ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatches;