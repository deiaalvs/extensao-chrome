import { Container, Header } from "./styles";
import Logo from '../../assets/logo.svg?component'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
    </Container>
  )
}