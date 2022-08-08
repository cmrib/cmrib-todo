import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { EmptyList } from "../../components/EmptyList";
import { Container, InputContainer, AddButton, Icon, Info, InfoContainer, Created, Done, Counter, Background, TaskContainer } from "./styles";
import { useTheme } from "styled-components";
import React, { useState } from "react";
import { Task } from "../../components/Task";

interface Tasks {
    id: string;
    title: string;
    done: boolean;
}

export function Home() {

    const theme = useTheme();

    const [userTasks, setUserTasks] = useState<Tasks[]>([])

    const [title, setTitle] = useState('')

    function handleCreateTask() {
        const task: Tasks = {
            id: String(Date.now()),
            title,
            done: false
        }
        setUserTasks(oldState => [task, ...oldState])
        setTitle('')
    }

    function deleteTask(id: string) {
        const filteredTasks = userTasks.filter((task) => {
            return task.id !== id
        })
        setUserTasks(filteredTasks)
    }

    function handleDone(id: string) {

        let filteredTask: Tasks

        userTasks.forEach((task) => {
            if (task.id === id) {
                task.done = !task.done
                filteredTask = task
            }
        })

        const newArray = userTasks.map(task => {
            if (task.id == filteredTask.id) {
                task = filteredTask
            }
            return task
        })

        setUserTasks(newArray)
    }


    const createdTasks = userTasks.length;
    let doneTasks = 0;


    userTasks.forEach((task) => {
        if (task.done) {
            doneTasks += 1
        }
    })

    return (
        <Container>
            <Header />

            <InputContainer>
                <Input
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.colors.gray_300}
                    onChangeText={setTitle}
                    value={title}
                />
                <AddButton
                    onPress={handleCreateTask}
                >
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
                            {createdTasks}
                        </Counter>
                    </Background>

                </InfoContainer>

                <InfoContainer>
                    <Done>
                        Concluídas
                    </Done>
                    <Background>
                        <Counter>
                            {doneTasks}
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
                        handleDelete={deleteTask}
                        handleDone={handleDone}
                        id={task.id}
                    />
                })}

            </TaskContainer>
            ) : <EmptyList />}

        </Container >
    )
}