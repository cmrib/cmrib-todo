import { Container, Text, Create } from './styles';
import { Image } from 'react-native';

export function EmptyList() {

    return (
        <Container>
            <Image source={require('../../../assets/clipboard.png')} />


            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Create>Crie tarefas e organize seus itens a fazer</Create>

        </Container>
    )
}