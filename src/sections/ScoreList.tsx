import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'
import { Box, Button, Grid, GridItem, VStack } from '@chakra-ui/react'

export function ScoreList() {
  const { teams } = useTeams()
  return (
    <Grid
      as='section'
      templateColumns='repeat(2,1fr)'
      className='divide-x'
      gap={0}
    >
      <List
        scoreList={teams.team1.scores}
        team='team1'
      />
      <List
        scoreList={teams.team2.scores}
        team='team2'
      />
    </Grid>
  )
}

function List({ scoreList, team }: { scoreList: number[]; team: TeamsKeys }) {
  const { setScoreIndexToUpdate, setTeamToUpdate, gameEnded } = useTeams()
  const { scoreModalToggle } = useModals()
  function handleEdit(index: number) {
    setScoreIndexToUpdate(index)
    setTeamToUpdate(team)
    scoreModalToggle(true)
  }

  return (
    <GridItem as='article'>
      <VStack
        className='divide-y'
        gap={0}
      >
        {scoreList.map((score, index) => {
          return (
            <Box
              key={team + index}
              w='100%'
              p={2}
            >
              <Button
                isDisabled={index !== scoreList.length - 1 && gameEnded}
                size={'sm'}
                w='100%'
                variant='ghost'
                onClick={() => handleEdit(index)}
              >
                {score}
              </Button>
            </Box>
          )
        })}
      </VStack>
    </GridItem>
  )
}
