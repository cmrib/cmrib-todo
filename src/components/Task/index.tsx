import { useState } from 'react'
import { TaskBox, Title, TrashButton, Icon, CheckButton } from './styles'

interface TaskProps {
    title: string;
    done: boolean;
}

export function Task({ title }: TaskProps) {

    const [checkIcon, setCheckIcon] = useState(false)

    return (
        <TaskBox>
            <CheckButton>
                <Icon name='circle' />
            </CheckButton>
            <Title>{title}</Title>
            <TrashButton>
                <Icon name="trash-2" />
            </TrashButton>
        </TaskBox>
    )
}