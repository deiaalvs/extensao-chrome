import { Container, FormContainer, PageTitle } from "./styles";
import Logo from '../../assets/logo.svg?component';
import Input from "../../components/input";

export default function Login() {
    return (
        <Container>
            <Logo />
            <PageTitle>Login</PageTitle>
            <FormContainer>
                <Input
                    label="teste"
                    id="teste"
                />
            </FormContainer>
        </Container>
    )
}