import { create } from 'zustand'
import { Team, Teams, TeamsKeys } from '../types/teams'

interface TeamsStore extends Teams {
  startGame: (name1: Team['name'], name2: Team['name']) => void
  endGame: () => void
  addScore: (score: number) => void
  teamToAddScore: TeamsKeys
  setTeamToAddScore: (team: TeamsKeys) => void
}

export const useTeams = create<TeamsStore>((set) => ({
  team1: {
    name: '',
    scores: []
  },
  team2: {
    name: '',
    scores: []
  },
  teamToAddScore: 'team1',
  setTeamToAddScore: (team) =>
    set(() => ({
      teamToAddScore: team
    })),
  startGame: (team1Name, team2Name) =>
    set(() => {
      return { team1: { name: team1Name, scores: [] }, team2: { name: team2Name, scores: [] } }
    }),
  endGame: () =>
    set(() => {
      return {
        team1: {
          name: '',
          scores: []
        },
        team2: {
          name: '',
          scores: []
        }
      }
    }),
  addScore: (score) =>
    set((state) => {
      return {
        [state.teamToAddScore]: {
          ...state[state.teamToAddScore],
          scores: [...state[state.teamToAddScore].scores, score]
        }
      }
    })
}))
// setShow(false)
// setTeams({
//   team1: {
//     name: team1Name,
//     scores: []
//   },
//   team2: {
//     name: team2Name,
//     scores: []
//   }
// })
