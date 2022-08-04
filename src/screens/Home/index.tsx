import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, InputContainer, AddButton, Icon, Info, InfoContainer, Created, Done, Counter, Background } from "./styles";
import { useTheme } from "styled-components";
import React from "react";
import { View } from "react-native";

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

            <Info>
                <InfoContainer>
                    <Created>
                        Criadas
                    </Created>
                    <Background >
                        <Counter>
                            0
                        </Counter>
                    </Background>

                </InfoContainer>

                <InfoContainer>
                    <Done>
                        Concluídas
                    </Done>
                    <Background>
                        <Counter>
                            0
                        </Counter>
                    </Background>
                </InfoContainer>
            </Info>

        </Container>
    )
}