import { Container } from './styles'
import { Image } from 'react-native'


export function Header() {
    return (

        <Container>

            <Image
                source={require('../../../assets/logo.png')}
            />


        </Container>
    )

}