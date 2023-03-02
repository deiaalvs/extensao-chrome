import { Container, Header } from "./styles";
import Logo from '../../assets/logo.svg?component'
import { FiLogOut } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <FiLogOut />
      </Header>
    </Container>
  )
}