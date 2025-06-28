import React from 'react';
import { Trophy, Crown, Target, Calendar, Users, Award, DollarSign, Clock } from 'lucide-react';
import { teams, bracketMatches, getPlayerById, getTeamByPlayerId } from '../data/tournamentData';

const TournamentBracket: React.FC = () => {
  const BracketMatch: React.FC<{ 
    playerA?: string; 
    playerB?: string; 
    winner?: string;
    scoreA?: number;
    scoreB?: number;
    status: string;
    title: string;
    isLive?: boolean;
    date?: string;
    time?: string;
  }> = ({ playerA, playerB, winner, scoreA, scoreB, status, title, isLive = false, date, time }) => {
    const playerAData = getPlayerById(playerA || '');
    const playerBData = getPlayerById(playerB || '');
    const teamAData = getTeamByPlayerId(playerA || '');
    const teamBData = getTeamByPlayerId(playerB || '');

    return (
      <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg border-2 transition-all duration-300 ${
        isLive ? 'border-red-500 shadow-red-200 animate-pulse' : 'border-gray-200'
      }`}>
        <div className="text-center mb-4">
          <h3 className={`font-bold text-base sm:text-lg ${isLive ? 'text-red-600' : 'text-gray-800'}`}>
            {title}
            {isLive && <span className="ml-2 text-red-500 text-sm">🔴 LIVE</span>}
          </h3>
          {date && time && (
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
              <Clock size={12} />
              <span>{date} at {time}</span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {playerAData && teamAData ? (
            <div className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all ${
              winner === playerA ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${teamAData.color} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}>
                  {teamAData.id}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium text-sm sm:text-base truncate">{playerAData.name}</span>
                  <span className="text-xs text-gray-500 truncate">({teamAData.name})</span>
                </div>
                <div className="flex items-center gap-2">
                  {scoreA !== undefined && (
                    <div className={`px-2 py-1 rounded text-xs font-bold ${
                      winner === playerA ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {scoreA}
                    </div>
                  )}
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    pts
                  </div>
                </div>
              </div>
              {winner === playerA && <Crown size={16} className="text-yellow-500 flex-shrink-0 sm:w-5 sm:h-5" />}
            </div>
          ) : (
            <div className="flex items-center justify-center p-2 sm:p-3 bg-gray-100 rounded-lg text-gray-500 text-sm sm:text-base">
              TBD
            </div>
          )}

          <div className="text-center text-gray-400 font-bold text-sm">VS</div>

          {playerBData && teamBData ? (
            <div className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all ${
              winner === playerB ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${teamBData.color} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}>
                  {teamBData.id}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium text-sm sm:text-base truncate">{playerBData.name}</span>
                  <span className="text-xs text-gray-500 truncate">({teamBData.name})</span>
                </div>
                <div className="flex items-center gap-2">
                  {scoreB !== undefined && (
                    <div className={`px-2 py-1 rounded text-xs font-bold ${
                      winner === playerB ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {scoreB}
                    </div>
                  )}
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    pts
                  </div>
                </div>
              </div>
              {winner === playerB && <Crown size={16} className="text-yellow-500 flex-shrink-0 sm:w-5 sm:h-5" />}
            </div>
          ) : (
            <div className="flex items-center justify-center p-2 sm:p-3 bg-gray-100 rounded-lg text-gray-500 text-sm sm:text-base">
              TBD
            </div>
          )}
        </div>

        {status === 'completed' && (
          <div className="mt-3 text-center">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              <Trophy size={12} />
              Winner: {getPlayerById(winner || '')?.name || 'TBD'}
              {scoreA !== undefined && scoreB !== undefined && (
                <span className="ml-1 font-bold">({Math.max(scoreA, scoreB)}-{Math.min(scoreA, scoreB)})</span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const getCurrentLeader = () => {
    const completedMatches = bracketMatches.filter(m => m.status === 'completed');
    if (completedMatches.length === 0) return 'TBD';
    
    const finalMatch = bracketMatches.find(m => m.round === 2);
    if (finalMatch?.status === 'completed' && finalMatch.winner) {
      return getPlayerById(finalMatch.winner)?.name || 'TBD';
    }
    
    // If final hasn't started, show players who advanced
    const advancedPlayers = completedMatches
      .filter(m => m.winner)
      .map(m => getPlayerById(m.winner!)?.name)
      .filter(Boolean);
    
    return advancedPlayers.length > 0 ? `${advancedPlayers.join(' & ')} (Finalists)` : 'TBD';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2 flex-wrap">
            <Trophy className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" />
            <span>Tournament Championship</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">Individual player semifinals and final</p>
        </div>

        {/* Tournament Bracket */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {/* Semi-Finals */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-center text-blue-600 mb-4">Semi-Finals</h3>
                <div className="space-y-6">
                  {bracketMatches
                    .filter(m => m.round === 1)
                    .map((match, index) => (
                      <BracketMatch
                        key={match.id}
                        playerA={match.teamA}
                        playerB={match.teamB}
                        winner={match.winner}
                        scoreA={match.scoreA}
                        scoreB={match.scoreB}
                        status={match.status}
                        title={`Semi-Final ${index + 1}`}
                        isLive={match.status === 'live'}
                        date={match.date}
                        time={match.time}
                      />
                    ))}
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center py-4">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gray-300"></div>
                  <Target className="text-gray-400 rotate-90 my-2" size={24} />
                  <div className="w-0.5 h-8 bg-gray-300"></div>
                </div>
              </div>

              {/* Final */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-center text-yellow-600 mb-4">Championship Final</h3>
                {bracketMatches
                  .filter(m => m.round === 2)
                  .map(match => (
                    <BracketMatch
                      key={match.id}
                      playerA={match.teamA}
                      playerB={match.teamB}
                      winner={match.winner}
                      scoreA={match.scoreA}
                      scoreB={match.scoreB}
                      status={match.status}
                      title="Grand Final"
                      isLive={match.status === 'live'}
                      date={match.date}
                      time={match.time}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            {/* Semi-Finals */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center text-blue-600 mb-4">Semi-Finals</h3>
              {bracketMatches
                .filter(m => m.round === 1)
                .map((match, index) => (
                  <BracketMatch
                    key={match.id}
                    playerA={match.teamA}
                    playerB={match.teamB}
                    winner={match.winner}
                    scoreA={match.scoreA}
                    scoreB={match.scoreB}
                    status={match.status}
                    title={`Semi-Final ${index + 1}`}
                    isLive={match.status === 'live'}
                    date={match.date}
                    time={match.time}
                  />
                ))}
            </div>

            {/* Arrow Right */}
            <div className="flex justify-center items-center">
              <div className="flex items-center">
                <div className="w-12 xl:w-16 h-0.5 bg-gray-300"></div>
                <Target className="text-gray-400 mx-2" size={24} />
                <div className="w-12 xl:w-16 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            {/* Final */}
            <div>
              <h3 className="text-xl font-bold text-center text-yellow-600 mb-4">Championship Final</h3>
              {bracketMatches
                .filter(m => m.round === 2)
                .map(match => (
                  <BracketMatch
                    key={match.id}
                    playerA={match.teamA}
                    playerB={match.teamB}
                    winner={match.winner}
                    scoreA={match.scoreA}
                    scoreB={match.scoreB}
                    status={match.status}
                    title="Grand Final"
                    isLive={match.status === 'live'}
                    date={match.date}
                    time={match.time}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Tournament Stats */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">Tournament Stats</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white text-center">
              <Users size={24} className="mx-auto mb-2 sm:w-8 sm:h-8" />
              <h4 className="text-sm sm:text-lg font-bold">Total Teams</h4>
              <p className="text-lg sm:text-2xl font-bold">{teams.length}</p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-4 sm:p-6 text-white text-center">
              <Target size={24} className="mx-auto mb-2 sm:w-8 sm:h-8" />
              <h4 className="text-sm sm:text-lg font-bold">Matches</h4>
              <p className="text-lg sm:text-2xl font-bold">{bracketMatches.length}</p>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-4 sm:p-6 text-white text-center">
              <Crown size={24} className="mx-auto mb-2 sm:w-8 sm:h-8" />
              <h4 className="text-sm sm:text-lg font-bold">Current Leader</h4>
              <p className="text-xs sm:text-sm font-bold leading-tight">{getCurrentLeader()}</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl p-4 sm:p-6 text-white text-center">
              <DollarSign size={24} className="mx-auto mb-2 sm:w-8 sm:h-8" />
              <h4 className="text-sm sm:text-lg font-bold">Prize Pool</h4>
              <p className="text-lg sm:text-2xl font-bold">₹50</p>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 sm:mb-12 bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Match Results</h3>
          <div className="space-y-3">
            {bracketMatches.map((match, index) => {
              const playerA = getPlayerById(match.teamA || '');
              const playerB = getPlayerById(match.teamB || '');
              const winner = getPlayerById(match.winner || '');
              
              return (
                <div key={match.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-sm text-gray-600">
                      {match.round === 1 ? `SF${index + 1}` : 'FINAL'}
                    </span>
                    <span className="text-sm">
                      {playerA?.name || 'TBD'} vs {playerB?.name || 'TBD'}
                    </span>
                    {match.date && match.time && (
                      <span className="text-xs text-gray-500">
                        {match.date} {match.time}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {match.status === 'completed' && winner && (
                      <>
                        <Crown size={16} className="text-yellow-500" />
                        <span className="font-medium text-sm text-green-600">{winner.name}</span>
                        {match.scoreA !== undefined && match.scoreB !== undefined && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            {Math.max(match.scoreA, match.scoreB)}-{Math.min(match.scoreA, match.scoreB)}
                          </span>
                        )}
                      </>
                    )}
                    {match.status === 'pending' && (
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Pending</span>
                    )}
                    {match.status === 'live' && (
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">🔴 Live</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tournament Rules */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
            <Award className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            Tournament Rules
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-blue-600 mb-2 flex items-center gap-2">
                  <Trophy size={16} className="sm:w-5 sm:h-5" />
                  Match Format
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm sm:text-base ml-6 sm:ml-8">
                  <li>• Best of 3 games per match</li>
                  <li>• First to 11 points wins each game</li>
                  <li>• Must win by 2 points margin</li>
                  <li>• Service alternates every 2 points</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-blue-600 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="sm:w-5 sm:h-5" />
                  Tournament Structure
                </h4>
                <ul className="text-gray-700 space-y-1 text-sm sm:text-base ml-6 sm:ml-8">
                  <li>• Top players advance to semi-finals</li>
                  <li>• Single elimination format</li>
                  <li>• Semi-finals determine finalists</li>
                  <li>• Winner takes the championship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket;