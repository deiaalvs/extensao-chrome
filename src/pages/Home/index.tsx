import { Container, Header } from "./styles";
import Logo from '../../assets/logo.svg?component'
import { FiLogOut } from 'react-icons/fi';
import VideosList from "../../components/videosList";
import { CurrentVideo } from "../../components/currentVideo";

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <FiLogOut />
      </Header>
      <CurrentVideo />
      <VideosList />
    </Container>
  )
}