export interface Team {
  name: string
  scores: number[]
}
export type TeamsKeys = 'team1' | 'team2'
export type Teams = Record<TeamsKeys, Team>
