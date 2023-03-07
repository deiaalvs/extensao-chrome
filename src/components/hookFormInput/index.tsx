import { Controller } from "react-hook-form";
import Input, { InputProps } from "../input";
import { Container } from "./styles";

type Props = InputProps & {
    id: string;
    control: any;
    error?: string
}

export default function HookFormInput({ id, control, ...rest }: Props) {
    return (
        <Container>
            <Controller
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }}) => (
                    <Input
                        {...rest} onChange={onChange} value={value} id={id}
                    />
                )}
                name={id}
            />
        </Container>
    )
}