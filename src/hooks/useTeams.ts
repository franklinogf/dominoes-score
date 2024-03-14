import { create } from 'zustand'
import { Team, Teams, TeamsKeys } from '../types/teams'

interface TeamsStore extends Teams {
  startGame: (team1Name: Team['name'], team2Name: Team['name']) => void
  endGame: () => void
  addScore: (score: number) => void
  setTeamToUpdate: (team: TeamsKeys) => void
  setScoreIndexToUpdate: (index: number | undefined) => void
  editScore: (newScore: number) => void
  deleteScore: () => void
  limit: number
  scoreIndexToUpdate: number | undefined
  gameEnded: boolean
  teamToUpdate: TeamsKeys
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
  scoreIndexToUpdate: undefined,
  setTeamToUpdate: (team) =>
    set(() => ({
      teamToUpdate: team
    })),
  setScoreIndexToUpdate: (index) =>
    set(() => ({
      scoreIndexToUpdate: index
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
    }),
  editScore: (newScore) =>
    set((state) => {
      if (state.scoreIndexToUpdate === undefined) return {}
      const team = state.teamToUpdate
      const scores = state[team].scores
      scores[state.scoreIndexToUpdate] = newScore
      const sumOfScores = sumScores(scores)

      return {
        [team]: {
          ...state[team],
          scores
        },
        gameEnded: sumOfScores >= state.limit,
        scoreIndexToUpdate: undefined
      }
    }),
  deleteScore: () =>
    set((state) => {
      if (state.scoreIndexToUpdate === undefined) return {}
      const team = state.teamToUpdate
      const scores = state[team].scores
      scores.splice(state.scoreIndexToUpdate, 1)
      const sumOfScores = sumScores(scores)

      return {
        [team]: {
          ...state[team],
          scores
        },
        gameEnded: sumOfScores >= state.limit,
        scoreIndexToUpdate: undefined
      }
    })
}))
