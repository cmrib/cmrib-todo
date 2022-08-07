import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { EmptyList } from "../../components/EmptyList";
import { Container, InputContainer, AddButton, Icon, Info, InfoContainer, Created, Done, Counter, Background, TaskContainer } from "./styles";
import { useTheme } from "styled-components";
import React from "react";
import { Task } from "../../components/Task";

interface Tasks {
    id: string;
    title: string;
    done: boolean;
}


const userTasks: Tasks[] = [
    {
        id: '0',
        title: 'Integer urna interdum massa libero auctor neque turpis semper.',
        done: false
    },
    {
        id: '1',
        title: 'Integer urna interdum massa libero auctor neque turpis semper.',
        done: false
    },
    {
        id: '3',
        title: 'Integer urna interdum massa libero auctor neque turpis semper.',
        done: false
    },
    {
        id: '4',
        title: 'Integer urna interdum massa libero auctor neque turpis semper. Integer urna interdum massa libero auctor neque turpis semper. Integer urna interdum massa libero auctor neque turpis semper.',
        done: false
    },
    {
        id: '5',
        title: 'Integer urna interdum massa libero auctor neque turpis semper.',
        done: false
    }
]


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

            {userTasks.length > 0 ? (<TaskContainer>
                {userTasks.map((task) => {
                    return <Task
                        key={task.id}
                        title={task.title}
                        done={task.done}
                    />
                })}

            </TaskContainer>
            ) : <EmptyList />}

        </Container >
    )
}