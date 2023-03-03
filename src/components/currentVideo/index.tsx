import { Title } from "../title";
import VideoItem from "../videoItem";
import { Container } from "./styles";

export function CurrentVideo() {
    return (
        <Container>
            <Title>Current Video</Title>
            <VideoItem addMode/>
        </Container>
    )
}