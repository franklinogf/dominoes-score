import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'
import { Box, Button, Grid, GridItem, VStack } from '@chakra-ui/react'

export function ScoreList() {
  const { team1, team2 } = useTeams()
  return (
    <Grid
      as='section'
      templateColumns='repeat(2,1fr)'
      className='divide-x'
      gap={0}
    >
      <List
        scoreList={team1.scores}
        team='team1'
      />
      <List
        scoreList={team2.scores}
        team='team2'
      />
    </Grid>
  )
}

function List({ scoreList, team }: { scoreList: number[]; team: TeamsKeys }) {
  const { setScoreIndexToUpdate, setTeamToUpdate } = useTeams()
  const { showScoreModal } = useModals()
  function handleEdit(index: number) {
    setScoreIndexToUpdate(index)
    setTeamToUpdate(team)
    showScoreModal()
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
              w='100%'
              p={2}
            >
              <Button
                size={'sm'}
                w='100%'
                variant='ghost'
                key={team + index}
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
