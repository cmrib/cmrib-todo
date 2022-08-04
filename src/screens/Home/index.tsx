import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, InputContainer, AddButton, Icon } from "./styles";
import { useTheme } from "styled-components";

export function Home() {

    const theme = useTheme();

    return (
        <Container>
            <Header />

            <InputContainer>
                <Input
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.colors.gray_300}
                />
                <AddButton>
                    <Icon name="plus-circle" />
                </AddButton>
            </InputContainer>

        </Container>
    )
}