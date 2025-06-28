export interface Player {
  id: string;
  name: string;
  teamId: string;
  points: number;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  captain: string;
  players: Player[];
  wins: number;
  losses: number;
  points: number;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  status: 'upcoming' | 'live' | 'completed';
  round: string;
}

export interface BracketMatch {
  id: string;
  teamA?: string;
  teamB?: string;
  winner?: string;
  scoreA?: number;
  scoreB?: number;
  round: number;
  position: number;
  status: 'pending' | 'live' | 'completed';
  date?: string;
  time?: string;
}