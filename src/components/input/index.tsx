import { InputHTMLAttributes, useState, ReactNode } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { InputContainer, InputWrapper, Label } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon: ReactNode;
}

export default function Input({
    label,
    icon,
    id,
    ...rest
}: InputProps) {
    const [focused, setFocus] = useState(false)
    return (
        <InputWrapper>
            <Label htmlFor={id}>{label}</Label>
            <InputContainer isFocused={focused}>
                {icon}
                <HiOutlineMail />
                <input
                    {...rest}
                    id={id}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </InputContainer>
        </InputWrapper>
    )
}