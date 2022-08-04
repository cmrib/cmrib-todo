
import { Container } from "./styles"
import { TextInputProps } from "react-native"

type InputProps = TextInputProps;

export function Input({ ...rest }: TextInputProps) {
    return (
        <Container
            {...rest}
        >

        </Container>
    )
}