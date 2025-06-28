import React from 'react';
import { Users, Crown, Trophy, Target, Award } from 'lucide-react';
import { teams } from '../data/tournamentData';

const Teams: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2 flex-wrap">
            <Users className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />
            <span>Tournament Teams</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Meet all the competing teams and their players</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {teams.map((team) => {
            const winRate = team.wins + team.losses > 0 ? (team.wins / (team.wins + team.losses) * 100).toFixed(1) : '0.0';
            
            return (
              <div
                key={team.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Team Header */}
                <div className={`bg-gradient-to-r ${team.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -mr-8 sm:-mr-10 -mt-8 sm:-mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full -ml-6 sm:-ml-8 -mb-6 sm:-mb-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-2xl font-bold leading-tight">{team.name}</h3>
                      <div className="text-xl sm:text-3xl font-bold">{team.id}</div>
                    </div>
                    <p className="flex items-center gap-1 text-white/90 text-sm sm:text-base">
                      <Crown size={14} className="sm:w-4 sm:h-4" />
                      <span className="truncate">Captain: {team.captain}</span>
                    </p>
                  </div>
                </div>

                {/* Team Stats */}
                <div className="p-3 sm:p-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Trophy size={14} className="text-yellow-500 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-blue-600">{team.points}</p>
                      <p className="text-xs text-gray-500">Points</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Target size={14} className="text-green-500 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-green-600">{team.wins}</p>
                      <p className="text-xs text-gray-500">Wins</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award size={14} className="text-purple-500 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-purple-600">{winRate}%</p>
                      <p className="text-xs text-gray-500">Win Rate</p>
                    </div>
                  </div>

                  {/* Performance Bar */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                      <span>Performance</span>
                      <span>{team.wins}W - {team.losses}L</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${team.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${Math.min(parseFloat(winRate), 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Players List */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-1 text-sm sm:text-base">
                      <Users size={14} className="sm:w-4 sm:h-4" />
                      Squad ({team.players.length})
                    </h4>
                    <div className="space-y-1 sm:space-y-2">
                      {
                        (() => {
                          const sortedPlayers = [...team.players].sort((a, b) => b.points - a.points);
                          const maxPoints = sortedPlayers[0]?.points ?? 0;

                          return sortedPlayers.map((player) => (
                            <div
                              key={player.id}
                              className={`flex items-center justify-between p-2 rounded-lg transition-all ${
                                player.points === maxPoints
                                  ? 'bg-yellow-50 border border-yellow-200'
                                  : 'bg-gray-50 hover:bg-gray-100'
                              }`}
                            >
                              <span className={`text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 truncate ${
                                player.points === maxPoints ? 'text-yellow-800' : 'text-gray-700'
                              }`}>
                                <span className="truncate">{player.name}</span>
                                {player.points === maxPoints && (
                                  <Crown size={12} className="text-yellow-500 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                                )}
                              </span>
                              <span className="text-xs text-gray-500 flex-shrink-0">{player.points} pts</span>
                            </div>
                          ));
                        })()
                      }
                    </div>
                  </div>

                </div>

                {/* Team Status Footer */}
                <div className={`bg-gradient-to-r ${team.color} bg-opacity-10 p-3 mt-auto`}>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-600">Current Rank</span>
                    <span className="font-bold text-gray-800">
                      #{[...teams].sort((a, b) => {
                        if (b.points !== a.points) return b.points - a.points;
                        if (b.wins !== a.wins) return b.wins - a.wins;
                        return a.losses - b.losses;
                      }).findIndex(t => t.id === team.id) + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tournament Overview */}
        <div className="mt-8 sm:mt-12 bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Tournament Overview</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800">{teams.length}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Total Teams</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Trophy className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800">{teams.reduce((sum, team) => sum + team.players.length, 0)}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Total Players</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Target className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800">{teams.reduce((sum, team) => sum + team.wins, 0)}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Total Wins</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Award className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800">₹50</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Prize Pool</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;