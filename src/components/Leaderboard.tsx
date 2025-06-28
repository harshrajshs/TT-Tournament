import React from 'react';
import { Trophy, Users, TrendingUp } from 'lucide-react';
import { teams } from '../data/tournamentData';

const Leaderboard: React.FC = () => {
  /* ---------- 1. Sort by points → wins → fewer losses ---------- */
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.wins   !== a.wins)   return b.wins   - a.wins;
    return a.losses - b.losses;
  });

  /* ---------- 2. Helpers that now special‑case ONLY rank 1 ---------- */
  const getRankIcon = (rank: number) =>
    rank === 1
      ? <Trophy className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
      : <span className="text-sm sm:text-lg font-bold text-gray-600">#{rank}</span>;

  const getRankBackground = (rank: number) =>
    rank === 1
      ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300'
      : 'bg-white border-gray-200';

  /* ---------- 3. Highest win‑rate team (for the info card) ---------- */
  const highestWinRateTeam = sortedTeams.reduce((prev, curr) => {
    const pRate = prev.wins + prev.losses ? prev.wins / (prev.wins + prev.losses) : 0;
    const cRate = curr.wins + curr.losses ? curr.wins / (curr.wins + curr.losses) : 0;
    return cRate > pRate ? curr : prev;
  });

  /* ---------- 4. Render ---------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2 flex-wrap">
            <Trophy className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" />
            <span>Tournament Leaderboard</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Current standings based on points and performance</p>
        </div>

        {/* Team cards */}
        <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
          {sortedTeams.map((team, idx) => {
            const rank       = idx + 1;
            const winRate    = team.wins + team.losses
              ? (team.wins / (team.wins + team.losses) * 100).toFixed(1)
              : '0.0';
            const maxPoints  = Math.max(...team.players.map(p => p.points));

            return (
              <div
                key={team.id}
                className={`${getRankBackground(rank)} rounded-xl p-3 sm:p-4 lg:p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]`}
              >
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                        {getRankIcon(rank)}
                      </div>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${team.color} rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg flex-shrink-0`}
                      >
                        {team.id}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">{team.name}</h3>
                        <p className="text-gray-600 flex items-center gap-1 text-xs sm:text-sm">
                          <Users size={12} className="sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{team.captain}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Stats Grid */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3">
                    <MobileStat label="Points" value={team.points} color="blue" />
                    <MobileStat label="Wins" value={team.wins} color="green" />
                    <MobileStat label="Losses" value={team.losses} color="red" />
                    <div className="text-center">
                      <p className="text-sm sm:text-base font-semibold text-purple-600 flex items-center justify-center gap-1">
                        <TrendingUp size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{winRate}%</span>
                      </p>
                      <p className="text-xs text-gray-500">Rate</p>
                    </div>
                  </div>

                  {/* Mobile Players */}
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {team.players.map(p => (
                        <span
                          key={p.id}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            p.points === maxPoints
                              ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          <span className="truncate max-w-[80px] inline-block">{p.name}</span>
                          {p.points === maxPoints && <span className="ml-1">👑</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  {/* Desktop Header */}
                  <div className="flex items-center justify-between">
                    {/* Left side: rank, logo, team name */}
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(rank)}
                      </div>

                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${team.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                      >
                        {team.id}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
                        <p className="text-gray-600 flex items-center gap-1">
                          <Users size={16} />
                          Captain: {team.captain}
                        </p>
                      </div>
                    </div>

                    {/* Right side: stats */}
                    <div className="flex items-center space-x-8">
                      <Stat label="Points" value={team.points} color="blue" />
                      <Stat label="Wins" value={team.wins} color="green" />
                      <Stat label="Losses" value={team.losses} color="red" />
                      <div className="text-center">
                        <p className="text-lg font-semibold text-purple-600 flex items-center gap-1">
                          <TrendingUp size={16} />
                          {winRate}%
                        </p>
                        <p className="text-sm text-gray-500">Win Rate</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Players */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {team.players.map(p => (
                        <span
                          key={p.id}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            p.points === maxPoints
                              ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {p.name}
                          {p.points === maxPoints && <span className="ml-1 text-xs">👑</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary cards */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Tournament Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <SummaryCard
              gradient="from-yellow-400 to-yellow-600"
              Icon={Trophy}
              title="Champion"
              value={sortedTeams[0]?.name || 'TBD'}
            />
            <SummaryCard
              gradient="from-blue-400 to-blue-600"
              Icon={TrendingUp}
              title="Highest Win Rate"
              value={highestWinRateTeam.name}
            />
            <SummaryCard
              gradient="from-green-400 to-green-600"
              Icon={Users}
              title="Total Teams"
              value={teams.length.toString()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Small helpers to keep JSX clean ---------- */
interface StatProps { label: string; value: number; color: string }
const Stat: React.FC<StatProps> = ({ label, value, color }) => (
  <div className="text-center">
    <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

interface MobileStatProps { label: string; value: number; color: string }
const MobileStat: React.FC<MobileStatProps> = ({ label, value, color }) => (
  <div className="text-center">
    <p className={`text-sm sm:text-base font-bold text-${color}-600`}>{value}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

interface SummaryCardProps {
  gradient: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
}
const SummaryCard: React.FC<SummaryCardProps> = ({ gradient, Icon, title, value }) => (
  <div className={`bg-gradient-to-r ${gradient} rounded-xl p-4 sm:p-6 text-white text-center`}>
    <Icon size={24} className="mx-auto mb-2 sm:w-8 sm:h-8" />
    <h3 className="text-base sm:text-lg lg:text-xl font-bold">{title}</h3>
    <p className="text-sm sm:text-base lg:text-lg font-medium truncate">{value}</p>
  </div>
);

export default Leaderboard;