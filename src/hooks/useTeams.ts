import { create } from 'zustand'
import { Team, Teams, TeamsKeys } from '../types/teams'

interface TeamsStore extends Teams {
  startGame: (team1Name: Team['name'], team2Name: Team['name']) => void
  endGame: () => void
  addScore: (score: number) => void
  teamToUpdate: TeamsKeys
  setTeamToUpdate: (team: TeamsKeys) => void
  limit: number
  gameEnded: boolean
}

const initialValues = {
  team1: {
    name: '',
    scores: []
  },
  team2: {
    name: '',
    scores: []
  },
  gameEnded: false
}
export function sumScores(scores: number[]) {
  return scores.reduce((a, b) => a + b, 0)
}
export const useTeams = create<TeamsStore>((set) => ({
  ...initialValues,
  limit: 200,

  teamToUpdate: 'team1',
  setTeamToUpdate: (team) =>
    set(() => ({
      teamToUpdate: team
    })),
  startGame: (team1Name, team2Name) =>
    set(() => {
      return { team1: { name: team1Name, scores: [] }, team2: { name: team2Name, scores: [] } }
    }),
  endGame: () => set(() => ({ ...initialValues })),
  addScore: (score) =>
    set((state) => {
      const team = state.teamToUpdate
      const scores = [...state[team].scores, score]
      const sumOfScores = sumScores(scores)
      return {
        [team]: {
          ...state[team],
          scores
        },
        gameEnded: sumOfScores >= state.limit
      }
    })
}))
