import { useState } from 'react'
import { TaskBox, Title, TrashButton, TrashIcon, CheckButton, CheckIcon } from './styles'

interface TaskProps {
    title: string;
    done: boolean;
    handleDelete: (id: string) => void;
    id: string;
    handleDone: (id: string) => void
}

export function Task({ title, handleDelete, id, done, handleDone }: TaskProps) {


    return (
        <TaskBox>
            <CheckButton onPress={() => {
                handleDone(id)
            }}>
                <CheckIcon name={done ? 'x-circle' : 'circle'} />
            </CheckButton>
            <Title done={done}>{title}</Title>
            <TrashButton onPress={() => handleDelete(id)}>
                <TrashIcon name="trash-2" />
            </TrashButton>
        </TaskBox>
    )
}