import { Team, Match, BracketMatch } from '../types/tournament';

export const teams: Team[] = [
  {
    id: 'A',
    name: 'Team A',
    color: 'from-cyan-400 to-cyan-600',
    captain: 'Harsh(S)',
    players: [
      { id: 'A1', name: 'Naman', teamId: 'A', points: 2 },
      { id: 'A2', name: 'Aaditya', teamId: 'A', points: 2 },
      { id: 'A3', name: 'Ankit', teamId: 'A', points: 4 },
      { id: 'A4', name: 'Nitya', teamId: 'A', points: 4 },
      { id: 'A5', name: 'Rishi', teamId: 'A', points: 10 },
      { id: 'A6', name: 'Harsh(S)', teamId: 'A', points: 8 }
    ],
    wins: 5,
    losses: 2,
    points: 8
  },
  {
    id: 'B',
    name: 'Team B',
    color: 'from-green-400 to-green-600',
    captain: 'Raunak(S)',
    players: [
      { id: 'B1', name: 'Harsh(c)', teamId: 'B', points: 4 },
      { id: 'B2', name: 'Kamal', teamId: 'B', points: 6 },
      { id: 'B3', name: 'Rohit', teamId: 'B', points: 2 },
      { id: 'B4', name: 'Raushani', teamId: 'B', points: 6 },
      { id: 'B5', name: 'Abhiraj', teamId: 'B', points: 10 },
      { id: 'B6', name: 'Raunak(S)', teamId: 'B', points: 2 }
    ],
    wins: 1,
    losses: 2,
    points: 0
  },
  {
    id: 'C',
    name: 'Team C',
    color: 'from-red-400 to-red-600',
    captain: 'Monti',
    players: [
      { id: 'C1', name: 'Manish', teamId: 'C', points: 4 },
      { id: 'C2', name: 'Anand', teamId: 'C', points: 6 },
      { id: 'C3', name: 'Ayush(c)', teamId: 'C', points: 8 },
      { id: 'C4', name: 'Pari', teamId: 'C', points: 0 },
      { id: 'C5', name: 'Monti', teamId: 'C', points: 10 },
      { id: 'C6', name: 'Prince(S)', teamId: 'C', points: 2 }
    ],
    wins: 1,
    losses: 2,
    points: 0
  },
  {
    id: 'D',
    name: 'Team D',
    color: 'from-purple-400 to-purple-600',
    captain: 'Amarjit',
    players: [
      { id: 'D1', name: 'Kislay', teamId: 'D', points: 2 },
      { id: 'D2', name: 'Abhimanyu', teamId: 'D', points: 10 },
      { id: 'D3', name: 'Ansh', teamId: 'D', points: 0 },
      { id: 'D4', name: 'Amarjit', teamId: 'D', points: 8 },
      { id: 'D5', name: 'Vaishnavi', teamId: 'D', points: 6 },
      { id: 'D6', name: 'Krishnakant(S)', teamId: 'D', points: 4 }
    ],
    wins: 0,
    losses: 2,
    points: -2
  },
  {
    id: 'E',
    name: 'Team E',
    color: 'from-pink-400 to-pink-600',
    captain: 'Uttam(S)',
    players: [
      { id: 'E1', name: 'Aarohit', teamId: 'E', points: 6 },
      { id: 'E2', name: 'Shivam', teamId: 'E', points: 0 },
      { id: 'E3', name: 'Aryan(M)', teamId: 'E', points: 4 },
      { id: 'E4', name: 'Aryan(B)', teamId: 'E', points: 10 },
      { id: 'E5', name: 'Riya', teamId: 'E', points: 2 },
      { id: 'E6', name: 'Uttam(S)', teamId: 'E', points: 8 }
    ],
    wins: 3,
    losses: 2,
    points: 4
  },
  {
    id: 'F',
    name: 'Team F',
    color: 'from-emerald-400 to-emerald-600',
    captain: 'Piyush',
    players: [
      { id: 'F1', name: 'Aryan(c)', teamId: 'F', points: 4 },
      { id: 'F2', name: 'Dev', teamId: 'F', points: 0 },
      { id: 'F3', name: 'Rajkumar', teamId: 'F', points: 2 },
      { id: 'F4', name: 'Dipanshu', teamId: 'F', points: 2 },
      { id: 'F5', name: 'Khushbu', teamId: 'F', points: 8 },
      { id: 'F6', name: 'Piyush', teamId: 'F', points: 8 }
    ],
    wins: 4,
    losses: 1,
    points: 7
  },
  {
    id: 'G',
    name: 'Team G',
    color: 'from-orange-400 to-orange-600',
    captain: 'Priyanshu',
    players: [
      { id: 'G1', name: 'Appy', teamId: 'G', points: 2 },
      { id: 'G2', name: 'Sarthak', teamId: 'G', points: 0 },
      { id: 'G3', name: 'Ankul', teamId: 'G', points: 6 },
      { id: 'G4', name: 'Mohit', teamId: 'G', points: 8 },
      { id: 'G5', name: 'Himanshi', teamId: 'G', points: 6 },
      { id: 'G6', name: 'Priyanshu', teamId: 'G', points: 8 }
    ],
    wins: 1,
    losses: 2,
    points: 0
  },
  {
    id: 'H',
    name: 'Team H',
    color: 'from-blue-400 to-blue-600',
    captain: 'Anshu',
    players: [
      { id: 'H1', name: 'Ayushi', teamId: 'H', points: 6 },
      { id: 'H2', name: 'Vidya', teamId: 'H', points: 6 },
      { id: 'H3', name: 'Ayush(B)', teamId: 'H', points: 2 },
      { id: 'H4', name: 'Harsh(B)', teamId: 'H', points: 6 },
      { id: 'H5', name: 'Anshu', teamId: 'H', points: 0 },
      { id: 'H6', name: 'Avinesh', teamId: 'H', points: 10 }
    ],
    wins: 0,
    losses: 2,
    points: -2
  }
];

export const matches: Match[] = [{
  'id': '1A',
  'date': '2025-06-09',
  'time': '16:30',
  'teamA': 'A1',
  'teamB': 'A2',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1B',
  'date': '2025-06-09',
  'time': '16:40',
  'teamA': 'B1',
  'teamB': 'B2',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1C',
  'date': '2025-06-09',
  'time': '16:50',
  'teamA': 'C1',
  'teamB': 'C2',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1D',
  'date': '2025-06-09',
  'time': '17:00',
  'teamA': 'D1',
  'teamB': 'D2',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1E',
  'date': '2025-06-09',
  'time': '17:10',
  'teamA': 'E1',
  'teamB': 'E2',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1F',
  'date': '2025-06-09',
  'time': '17:20',
  'teamA': 'F1',
  'teamB': 'F2',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1G',
  'date': '2025-06-09',
  'time': '17:30',
  'teamA': 'G1',
  'teamB': 'G2',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '1H',
  'date': '2025-06-09',
  'time': '17:40',
  'teamA': 'H1',
  'teamB': 'H2',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2A',
  'date': '2025-06-09',
  'time': '17:50',
  'teamA': 'A3',
  'teamB': 'A4',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2B',
  'date': '2025-06-09',
  'time': '18:00',
  'teamA': 'B3',
  'teamB': 'B4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2C',
  'date': '2025-06-09',
  'time': '18:10',
  'teamA': 'C3',
  'teamB': 'C4',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2D',
  'date': '2025-06-09',
  'time': '18:20',
  'teamA': 'D3',
  'teamB': 'D4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2E',
  'date': '2025-06-09',
  'time': '18:30',
  'teamA': 'E3',
  'teamB': 'E4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2F',
  'date': '2025-06-09',
  'time': '18:40',
  'teamA': 'F3',
  'teamB': 'F4',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2G',
  'date': '2025-06-09',
  'time': '18:50',
  'teamA': 'G3',
  'teamB': 'G4',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '2H',
  'date': '2025-06-09',
  'time': '19:00',
  'teamA': 'H3',
  'teamB': 'H4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3A',
  'date': '2025-06-10',
  'time': '16:30',
  'teamA': 'A3',
  'teamB': 'A5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3B',
  'date': '2025-06-10',
  'time': '16:40',
  'teamA': 'B3',
  'teamB': 'B5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3C',
  'date': '2025-06-10',
  'time': '16:50',
  'teamA': 'C3',
  'teamB': 'C5',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3D',
  'date': '2025-06-10',
  'time': '17:00',
  'teamA': 'D3',
  'teamB': 'D5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3E',
  'date': '2025-06-10',
  'time': '17:10',
  'teamA': 'E3',
  'teamB': 'E5',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3F',
  'date': '2025-06-10',
  'time': '17:20',
  'teamA': 'F3',
  'teamB': 'F5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3G',
  'date': '2025-06-10',
  'time': '17:30',
  'teamA': 'G3',
  'teamB': 'G5',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '3H',
  'date': '2025-06-10',
  'time': '17:40',
  'teamA': 'H3',
  'teamB': 'H5',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4A',
  'date': '2025-06-10',
  'time': '17:50',
  'teamA': 'A4',
  'teamB': 'A6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4B',
  'date': '2025-06-10',
  'time': '18:00',
  'teamA': 'B4',
  'teamB': 'B6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4C',
  'date': '2025-06-10',
  'time': '18:10',
  'teamA': 'C4',
  'teamB': 'C6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4D',
  'date': '2025-06-10',
  'time': '18:20',
  'teamA': 'D4',
  'teamB': 'D6',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4E',
  'date': '2025-06-10',
  'time': '18:30',
  'teamA': 'E4',
  'teamB': 'E6',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4F',
  'date': '2025-06-10',
  'time': '18:40',
  'teamA': 'F4',
  'teamB': 'F6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4G',
  'date': '2025-06-10',
  'time': '18:50',
  'teamA': 'G4',
  'teamB': 'G6',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '4H',
  'date': '2025-06-10',
  'time': '19:00',
  'teamA': 'H4',
  'teamB': 'H6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5A',
  'date': '2025-06-11',
  'time': '16:30',
  'teamA': 'A1',
  'teamB': 'A5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5B',
  'date': '2025-06-11',
  'time': '16:40',
  'teamA': 'B1',
  'teamB': 'B5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5C',
  'date': '2025-06-11',
  'time': '16:50',
  'teamA': 'C1',
  'teamB': 'C5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5D',
  'date': '2025-06-11',
  'time': '17:00',
  'teamA': 'D1',
  'teamB': 'D5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5E',
  'date': '2025-06-11',
  'time': '17:10',
  'teamA': 'E1',
  'teamB': 'E5',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5F',
  'date': '2025-06-11',
  'time': '17:20',
  'teamA': 'F1',
  'teamB': 'F5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5G',
  'date': '2025-06-11',
  'time': '17:30',
  'teamA': 'G1',
  'teamB': 'G5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '5H',
  'date': '2025-06-11',
  'time': '17:40',
  'teamA': 'H1',
  'teamB': 'H5',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6A',
  'date': '2025-06-11',
  'time': '17:50',
  'teamA': 'A2',
  'teamB': 'A6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6B',
  'date': '2025-06-11',
  'time': '18:00',
  'teamA': 'B2',
  'teamB': 'B6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6C',
  'date': '2025-06-11',
  'time': '18:10',
  'teamA': 'C2',
  'teamB': 'C6',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6D',
  'date': '2025-06-11',
  'time': '18:20',
  'teamA': 'D2',
  'teamB': 'D6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6E',
  'date': '2025-06-11',
  'time': '18:30',
  'teamA': 'E2',
  'teamB': 'E6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6F',
  'date': '2025-06-10',
  'time': '19:35',
  'teamA': 'F2',
  'teamB': 'F6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6G',
  'date': '2025-06-11',
  'time': '18:50',
  'teamA': 'G2',
  'teamB': 'G6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '6H',
  'date': '2025-06-11',
  'time': '19:00',
  'teamA': 'H2',
  'teamB': 'H6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7A',
  'date': '2025-06-12',
  'time': '16:30',
  'teamA': 'A1',
  'teamB': 'A3',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7B',
  'date': '2025-06-12',
  'time': '16:40',
  'teamA': 'B1',
  'teamB': 'B3',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7C',
  'date': '2025-06-12',
  'time': '16:50',
  'teamA': 'C1',
  'teamB': 'C3',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7D',
  'date': '2025-06-12',
  'time': '17:00',
  'teamA': 'D1',
  'teamB': 'D3',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7E',
  'date': '2025-06-12',
  'time': '17:10',
  'teamA': 'E1',
  'teamB': 'E3',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7F',
  'date': '2025-06-12',
  'time': '17:20',
  'teamA': 'F1',
  'teamB': 'F3',
  'scoreA': 0,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7G',
  'date': '2025-06-12',
  'time': '17:30',
  'teamA': 'G1',
  'teamB': 'G3',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '7H',
  'date': '2025-06-12',
  'time': '17:40',
  'teamA': 'H1',
  'teamB': 'H3',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8A',
  'date': '2025-06-10',
  'time': '19:40',
  'teamA': 'A2',
  'teamB': 'A4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8B',
  'date': '2025-06-12',
  'time': '18:00',
  'teamA': 'B2',
  'teamB': 'B4',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8C',
  'date': '2025-06-12',
  'time': '18:10',
  'teamA': 'C2',
  'teamB': 'C4',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8D',
  'date': '2025-06-12',
  'time': '18:20',
  'teamA': 'D2',
  'teamB': 'D4',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8E',
  'date': '2025-06-12',
  'time': '18:30',
  'teamA': 'E2',
  'teamB': 'E4',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8F',
  'date': '2025-06-12',
  'time': '18:40',
  'teamA': 'F2',
  'teamB': 'F4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8G',
  'date': '2025-06-12',
  'time': '18:50',
  'teamA': 'G2',
  'teamB': 'G4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '8H',
  'date': '2025-06-12',
  'time': '19:00',
  'teamA': 'H2',
  'teamB': 'H4',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9A',
  'date': '2025-06-13',
  'time': '16:30',
  'teamA': 'A3',
  'teamB': 'A6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9B',
  'date': '2025-06-13',
  'time': '16:40',
  'teamA': 'B3',
  'teamB': 'B6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9C',
  'date': '2025-06-13',
  'time': '16:50',
  'teamA': 'C3',
  'teamB': 'C6',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9D',
  'date': '2025-06-13',
  'time': '17:00',
  'teamA': 'D3',
  'teamB': 'D6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9E',
  'date': '2025-06-13',
  'time': '17:10',
  'teamA': 'E3',
  'teamB': 'E6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9F',
  'date': '2025-06-13',
  'time': '17:20',
  'teamA': 'F3',
  'teamB': 'F6',
  'scoreA': 0,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9G',
  'date': '2025-06-13',
  'time': '17:30',
  'teamA': 'G3',
  'teamB': 'G6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '9H',
  'date': '2025-06-13',
  'time': '17:40',
  'teamA': 'H3',
  'teamB': 'H6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10A',
  'date': '2025-06-09',
  'time': '19:10',
  'teamA': 'A4',
  'teamB': 'A5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10B',
  'date': '2025-06-13',
  'time': '18:00',
  'teamA': 'B4',
  'teamB': 'B5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10C',
  'date': '2025-06-13',
  'time': '18:10',
  'teamA': 'C4',
  'teamB': 'C5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10D',
  'date': '2025-06-13',
  'time': '18:20',
  'teamA': 'D4',
  'teamB': 'D5',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10E',
  'date': '2025-06-13',
  'time': '18:30',
  'teamA': 'E4',
  'teamB': 'E5',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10F',
  'date': '2025-06-13',
  'time': '18:40',
  'teamA': 'F4',
  'teamB': 'F5',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10G',
  'date': '2025-06-13',
  'time': '18:50',
  'teamA': 'G4',
  'teamB': 'G5',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '10H',
  'date': '2025-06-13',
  'time': '19:00',
  'teamA': 'H4',
  'teamB': 'H5',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11A',
  'date': '2025-06-14',
  'time': '16:30',
  'teamA': 'A1',
  'teamB': 'A6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11B',
  'date': '2025-06-14',
  'time': '16:40',
  'teamA': 'B1',
  'teamB': 'B6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11C',
  'date': '2025-06-14',
  'time': '16:50',
  'teamA': 'C1',
  'teamB': 'C6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11D',
  'date': '2025-06-14',
  'time': '17:00',
  'teamA': 'D1',
  'teamB': 'D6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11E',
  'date': '2025-06-14',
  'time': '17:10',
  'teamA': 'E1',
  'teamB': 'E6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11F',
  'date': '2025-06-14',
  'time': '17:20',
  'teamA': 'F1',
  'teamB': 'F6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11G',
  'date': '2025-06-14',
  'time': '17:30',
  'teamA': 'G1',
  'teamB': 'G6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '11H',
  'date': '2025-06-14',
  'time': '17:40',
  'teamA': 'H1',
  'teamB': 'H6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12A',
  'date': '2025-06-14',
  'time': '17:50',
  'teamA': 'A2',
  'teamB': 'A5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12B',
  'date': '2025-06-14',
  'time': '18:00',
  'teamA': 'B2',
  'teamB': 'B5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12C',
  'date': '2025-06-14',
  'time': '18:10',
  'teamA': 'C2',
  'teamB': 'C5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12D',
  'date': '2025-06-14',
  'time': '18:20',
  'teamA': 'D2',
  'teamB': 'D5',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12E',
  'date': '2025-06-14',
  'time': '18:30',
  'teamA': 'E2',
  'teamB': 'E5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12F',
  'date': '2025-06-14',
  'time': '18:40',
  'teamA': 'F2',
  'teamB': 'F5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12G',
  'date': '2025-06-14',
  'time': '18:50',
  'teamA': 'G2',
  'teamB': 'G5',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '12H',
  'date': '2025-06-14',
  'time': '19:00',
  'teamA': 'H2',
  'teamB': 'H5',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13A',
  'date': '2025-06-09',
  'time': '19:00',
  'teamA': 'A1',
  'teamB': 'A4',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13B',
  'date': '2025-06-16',
  'time': '16:40',
  'teamA': 'B1',
  'teamB': 'B4',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13C',
  'date': '2025-06-16',
  'time': '16:50',
  'teamA': 'C1',
  'teamB': 'C4',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13D',
  'date': '2025-06-16',
  'time': '17:00',
  'teamA': 'D1',
  'teamB': 'D4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13E',
  'date': '2025-06-16',
  'time': '17:10',
  'teamA': 'E1',
  'teamB': 'E4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13F',
  'date': '2025-06-16',
  'time': '17:20',
  'teamA': 'F1',
  'teamB': 'F4',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13G',
  'date': '2025-06-16',
  'time': '17:30',
  'teamA': 'G1',
  'teamB': 'G4',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '13H',
  'date': '2025-06-16',
  'time': '17:40',
  'teamA': 'H1',
  'teamB': 'H4',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14A',
  'date': '2025-06-16',
  'time': '17:50',
  'teamA': 'A2',
  'teamB': 'A3',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14B',
  'date': '2025-06-16',
  'time': '18:00',
  'teamA': 'B2',
  'teamB': 'B3',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14C',
  'date': '2025-06-16',
  'time': '18:10',
  'teamA': 'C2',
  'teamB': 'C3',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14D',
  'date': '2025-06-16',
  'time': '18:20',
  'teamA': 'D2',
  'teamB': 'D3',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14E',
  'date': '2025-06-16',
  'time': '18:30',
  'teamA': 'E2',
  'teamB': 'E3',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14F',
  'date': '2025-06-16',
  'time': '18:40',
  'teamA': 'F2',
  'teamB': 'F3',
  'scoreA': 0,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14G',
  'date': '2025-06-16',
  'time': '18:50',
  'teamA': 'G2',
  'teamB': 'G3',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '14H',
  'date': '2025-06-16',
  'time': '19:00',
  'teamA': 'H2',
  'teamB': 'H3',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15A',
  'date': '2025-06-17',
  'time': '16:30',
  'teamA': 'A5',
  'teamB': 'A6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15B',
  'date': '2025-06-17',
  'time': '16:40',
  'teamA': 'B5',
  'teamB': 'B6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15C',
  'date': '2025-06-17',
  'time': '16:50',
  'teamA': 'C5',
  'teamB': 'C6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15D',
  'date': '2025-06-17',
  'time': '17:00',
  'teamA': 'D5',
  'teamB': 'D6',
  'scoreA': 3,
  'scoreB': 0,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15E',
  'date': '2025-06-17',
  'time': '17:10',
  'teamA': 'E5',
  'teamB': 'E6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15F',
  'date': '2025-06-17',
  'time': '17:20',
  'teamA': 'F5',
  'teamB': 'F6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15G',
  'date': '2025-06-17',
  'time': '17:30',
  'teamA': 'G5',
  'teamB': 'G6',
  'scoreA': 0,
  'scoreB': 3,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '15H',
  'date': '2025-06-17',
  'time': '17:40',
  'teamA': 'H5',
  'teamB': 'H6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'League'
},
{
  'id': '16A',
  'date': '2025-06-21',
  'time': '16:30',
  'teamA': 'A5',
  'teamB': 'H1',
  'scoreA': 2,
  'scoreB': 0,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16B',
  'date': '2025-06-21',
  'time': '16:50',
  'teamA': 'A6',
  'teamB': 'H6',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16C',
  'date': '2025-06-21',
  'time': '17:10',
  'teamA': 'C5',
  'teamB': 'G6',
  'scoreA': 0,
  'scoreB': 2,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16D',
  'date': '2025-06-21',
  'time': '17:30',
  'teamA': 'C3',
  'teamB': 'G4',
  'scoreA': 2,
  'scoreB': 0,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16E',
  'date': '2025-06-21',
  'time': '17:50',
  'teamA': 'B5',
  'teamB': 'F5',
  'scoreA': 2,
  'scoreB': 1,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16F',
  'date': '2025-06-21',
  'time': '18:10',
  'teamA': 'B4',
  'teamB': 'F6',
  'scoreA': 0,
  'scoreB': 2,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16G',
  'date': '2025-06-21',
  'time': '18:30',
  'teamA': 'D2',
  'teamB': 'E6',
  'scoreA': 0,
  'scoreB': 2,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '16H',
  'date': '2025-06-21',
  'time': '18:50',
  'teamA': 'D4',
  'teamB': 'E4',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'Knockout'
},
{
  'id': '17A',
  'date': '2025-06-22',
  'time': '16:30',
  'teamA': 'A5',
  'teamB': 'G6',
  'scoreA': 2,
  'scoreB': 0,
  'status': 'completed',
  'round': 'Knockout2'
},
{
  'id': '17B',
  'date': '2025-06-22',
  'time': '16:50',
  'teamA': 'A6',
  'teamB': 'C3',
  'scoreA': 2,
  'scoreB': 0,
  'status': 'completed',
  'round': 'Knockout2'
},
{
  'id': '17C',
  'date': '2025-06-22',
  'time': '17:10',
  'teamA': 'B5',
  'teamB': 'E4',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'Knockout2'
},
{
  'id': '17D',
  'date': '2025-06-22',
  'time': '17:30',
  'teamA': 'E6',
  'teamB': 'F6',
  'scoreA': 1,
  'scoreB': 2,
  'status': 'completed',
  'round': 'Knockout2'
},
{
  'id': '18A',
  'date': '2025-06-22',
  'time': '18:00',
  'teamA': 'A5',
  'teamB': 'E4',
  'scoreA': 3,
  'scoreB': 2,
  'status': 'completed',
  'round': 'semifinal'
},
{
  'id': '18B',
  'date': '2025-06-22',
  'time': '18:30',
  'teamA': 'A6',
  'teamB': 'F6',
  'scoreA': 2,
  'scoreB': 3,
  'status': 'completed',
  'round': 'semifinal'
},
{
  'id': '19A',
  'date': '2025-06-23',
  'time': '17:30',
  'teamA': 'A5',
  'teamB': 'F6',
  'scoreA': 2,
  'scoreB': 3,
  'status': 'completed',
  'round': 'Final'
}];
// export const bracketMatches: BracketMatch[] = [
//   { id: 'sf1', teamA: 'B1', teamB: 'F1', round: 1, position: 1, status: 'pending' },
//   { id: 'sf2', teamA: 'A', teamB: 'E', round: 1, position: 2, status: 'pending' },
//   { id: 'final', round: 2, position: 1, status: 'pending' }
// ];

export const bracketMatches: BracketMatch[] = [
  { 
    id: 'sf1', 
    teamA: 'A5', 
    teamB: 'E4', 
    scoreA: 3,
    scoreB: 2,
    round: 1, 
    position: 1, 
    status: 'completed', 
    winner: 'A5',
    date: '2025-06-22',
    time: '18:00'
  },
  { 
    id: 'sf2', 
    teamA: 'A6', 
    teamB: 'F6', 
    scoreA: 2,
    scoreB: 3,
    round: 1, 
    position: 2, 
    status: 'completed', 
    winner: 'F6',
    date: '2025-06-22',
    time: '18:30'
  },
  { 
    id: 'final', 
    teamA: 'A5', 
    teamB: 'F6',
    scoreA: 2,
    scoreB: 3, 
    round: 2, 
    position: 1, 
    status: 'completed', 
    winner: 'F6',
    date: '2025-06-23',
    time: '17:30'
  }
];


// Helper function to get all players
export const getAllPlayers = () => {
  return teams.flatMap(team => team.players);
};

// Helper function to get player by ID
export const getPlayerById = (playerId: string) => {
  return getAllPlayers().find(player => player.id === playerId);
};

// Helper function to get team by player ID
export const getTeamByPlayerId = (playerId: string) => {
  const player = getPlayerById(playerId);
  return player ? teams.find(team => team.id === player.teamId) : undefined;
};