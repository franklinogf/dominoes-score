import { create } from 'zustand'
import { Team, Teams, TeamsKeys } from '../types/teams'

interface State {
  teams: Teams
  limit: number
  scoreIndexToUpdate?: number
  gameEnded: boolean
  teamToUpdate: TeamsKeys
  winner?: TeamsKeys
}

type Action = {
  startGame: (team1Name: Team['name'], team2Name: Team['name']) => void
  endGame: () => void
  addScore: (newScore: Team['scores'][number]) => void
  setTeamToUpdate: (team: TeamsKeys) => void
  setScoreIndexToUpdate: (index: State['scoreIndexToUpdate']) => void
  editScore: (newScore: Team['scores'][number]) => void
  deleteScore: () => void
  setWinningTeam: () => void
}
type TeamsStore = State & Action

const initialValues: Omit<State, 'limit'> = {
  teams: {
    team1: {
      name: '',
      scores: []
    },
    team2: {
      name: '',
      scores: []
    }
  },
  gameEnded: false,
  winner: undefined,
  teamToUpdate: 'team1',
  scoreIndexToUpdate: undefined
}

export const useTeams = create<TeamsStore>((set, get) => ({
  ...initialValues,
  limit: 200,
  setTeamToUpdate: (team) => set({ teamToUpdate: team }),
  setScoreIndexToUpdate: (index) => set({ scoreIndexToUpdate: index }),
  startGame: (team1Name, team2Name) =>
    set({
      teams: {
        team1: { name: team1Name, scores: [] },
        team2: { name: team2Name, scores: [] }
      }
    }),
  endGame: () => set(initialValues),
  addScore: (newScore) => {
    set((state) => {
      const team = state.teamToUpdate
      const scores = [...state.teams[team].scores, newScore]
      return {
        teams: {
          ...state.teams,
          [team]: {
            ...state.teams[team],
            scores
          }
        }
      }
    })
    get().setWinningTeam()
  },
  editScore: (newScore) => {
    set((state) => {
      if (state.scoreIndexToUpdate === undefined) return {}
      const team = state.teamToUpdate
      const scores = state.teams[team].scores
      scores[state.scoreIndexToUpdate] = newScore

      return {
        teams: {
          ...state.teams,
          [team]: {
            ...state.teams[team],
            scores
          }
        }
      }
    })
    get().setWinningTeam()
  },
  deleteScore: () => {
    set((state) => {
      if (state.scoreIndexToUpdate === undefined) return {}
      const team = state.teamToUpdate
      const scores = state.teams[team].scores
      scores.splice(state.scoreIndexToUpdate, 1)

      return {
        teams: {
          ...state.teams,
          [team]: {
            ...state.teams[team],
            scores
          }
        }
      }
    })
    get().setWinningTeam()
  },
  setWinningTeam: () =>
    set((state) => {
      const scores1 = sumScores(state.teams.team1.scores)
      const scores2 = sumScores(state.teams.team2.scores)
      const winner = scores1 === scores2 ? undefined : scores1 > scores2 ? 'team1' : 'team2'
      const gameEnded = scores1 >= state.limit || scores2 >= state.limit ? true : false

      return { winner, gameEnded, scoreIndexToUpdate: undefined }
    })
}))

export function sumScores(scores: Team['scores']) {
  return scores.reduce((a, b) => a + b, 0)
}
