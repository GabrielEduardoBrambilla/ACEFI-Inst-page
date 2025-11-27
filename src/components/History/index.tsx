import { STRINGS_PT } from '../../constants'
import { Container } from './styles'

interface HistoryProps {
  id: string
}
export default function History({ id }: HistoryProps) {
  return (
    <Container id={id}>
      <h2>{STRINGS_PT.history.mainTitle}</h2>
      <h4>{STRINGS_PT.history.whenStarted}</h4>
      <p>{STRINGS_PT.history.whenStartedDescription}</p>
      <h4>{STRINGS_PT.history.whoWeAre}</h4>
      <p>{STRINGS_PT.history.whoWeAreDescription}</p>
      <h4>{STRINGS_PT.history.ourMission}</h4>
      <p>{STRINGS_PT.history.ourMissionDescription}</p>
    </Container>
  )
}
