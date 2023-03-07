import { Container, FormContainer, PageTitle } from "./styles";
import Logo from '../../assets/logo.svg?component';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
    email: Yup.string().required('Email is a required fiel').matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid email address'
      ),
    password: Yup.string().required('Password is a required field')
})

export default function Login() {
    const {} = useForm({
        resolver: yupResolver(schema)
    })
    return (
        <Container>
            <Logo />
            <PageTitle>Login</PageTitle>
            <FormContainer>
            </FormContainer>
        </Container>
    )
}