import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'


export const TaskBox = styled.View`
   
    padding: 12px 24px;   
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray_500};
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.gray_100};
    text-align: left;
`;

export const CheckButton = styled.TouchableOpacity`

`

export const TrashButton = styled.TouchableOpacity`
    
`;

export const Icon = styled(Feather)`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.gray_100};
`;
