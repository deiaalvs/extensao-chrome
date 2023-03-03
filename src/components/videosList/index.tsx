import { Title } from "../title";
import VideoItem from "../videoItem";
import { Container, ListContainer } from "./styles";

export default function VideosList() {
    return (
        <Container>
            <header>
                <Title>Videos in list</Title>
            </header>
            <ListContainer>
                <VideoItem />
            </ListContainer>
        </Container>
    )
}