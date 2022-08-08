import { useState } from 'react'
import { TaskBox, Title, TrashButton, Icon, CheckButton } from './styles'

interface TaskProps {
    title: string;
    done: boolean;
    handleDelete: (id: string) => void;
    id: string;
}

export function Task({ title, handleDelete, id }: TaskProps) {

    const [checkIcon, setCheckIcon] = useState(false)

    return (
        <TaskBox>
            <CheckButton>
                <Icon name='circle' />
            </CheckButton>
            <Title>{title}</Title>
            <TrashButton onPress={() => handleDelete(id)}>
                <Icon name="trash-2" />
            </TrashButton>
        </TaskBox>
    )
}