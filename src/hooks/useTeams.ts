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
  addScore: (score: Team['scores'][number]) => void
  setTeamToUpdate: (team: TeamsKeys) => void
  setScoreIndexToUpdate: (index: State['scoreIndexToUpdate']) => void
  editScore: (newScore: Team['scores'][number]) => void
  deleteScore: () => void
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

export const useTeams = create<TeamsStore>((set) => ({
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
  addScore: (score) =>
    set((state) => {
      const team = state.teamToUpdate
      const scores = [...state.teams[team].scores, score]
      const sumOfScores = sumScores(scores)
      const theOtherTeam: State['winner'] = team === 'team1' ? 'team2' : 'team1'
      const scores2 = state.teams[theOtherTeam].scores

      return {
        teams: {
          ...state.teams,
          [team]: {
            ...state.teams[team],
            scores
          }
        },
        scoreIndexToUpdate: undefined,
        gameEnded: sumOfScores >= state.limit,
        winner: checkWinningTeam({
          [team]: scores,
          [theOtherTeam]: scores2
        })
      }
    }),
  editScore: (newScore) =>
    set((state) => {
      if (state.scoreIndexToUpdate === undefined) return {}
      const team = state.teamToUpdate
      const scores = state.teams[team].scores
      scores[state.scoreIndexToUpdate] = newScore
      const sumOfScores = sumScores(scores)
      const theOtherTeam = team === 'team1' ? 'team2' : 'team1'
      const scores2 = state.teams[theOtherTeam].scores

      return {
        teams: {
          ...state.teams,
          [team]: {
            ...state.teams[team],
            scores
          }
        },
        gameEnded: sumOfScores >= state.limit,
        scoreIndexToUpdate: undefined,
        winner: checkWinningTeam({
          [team]: scores,
          [theOtherTeam]: scores2
        })
      }
    }),
  deleteScore: () =>
    set((state) => {
      if (state.scoreIndexToUpdate === undefined) return {}
      const team = state.teamToUpdate
      const scores = state.teams[team].scores
      scores.splice(state.scoreIndexToUpdate, 1)
      const sumOfScores = sumScores(scores)
      const theOtherTeam = team === 'team1' ? 'team2' : 'team1'
      const scores2 = state.teams[theOtherTeam].scores
      return {
        teams: {
          ...state.teams,
          [team]: {
            ...state.teams[team],
            scores
          }
        },
        gameEnded: sumOfScores >= state.limit,
        scoreIndexToUpdate: undefined,
        winner: checkWinningTeam({
          [team]: scores,
          [theOtherTeam]: scores2
        })
      }
    })
}))
function checkWinningTeam({
  team1,
  team2
}: {
  team1?: Team['scores']
  team2?: Team['scores']
}): State['winner'] {
  if (!team1 || !team2) return
  const scores1 = sumScores(team1)
  const scores2 = sumScores(team2)
  if (scores1 === scores2) return
  if (scores1 > scores2) return 'team1'
  return 'team2'
}
export function sumScores(scores: Team['scores']) {
  return scores.reduce((a, b) => a + b, 0)
}
