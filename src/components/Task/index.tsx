import { TaskBox, Title, TrashButton, Icon, CheckButton } from './styles'


export function Task() {
    return (
        <TaskBox>

            <CheckButton>

            </CheckButton>
            <Title>Integer urna interdum massa libero auctor neque turpis semper.</Title>
            <TrashButton>
                <Icon name="trash-2" />
            </TrashButton>

        </TaskBox>
    )
}