import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

interface IconProps {
    name: string;
}


export const TaskBox = styled.View`
   
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;  
    background-color: ${({ theme }) => theme.colors.gray_400};
    border-radius: 8px;  
    padding: 12px 24px;
    
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.gray_100};
    text-align: left;
    margin-left: 8px;
    margin-right: 8px;
`;

export const CheckButton = styled.TouchableOpacity`
  

`

export const TrashButton = styled.TouchableOpacity`
      
`;

export const Icon = styled(Feather) <IconProps>`
    font-size: 22px;
    color: ${({ theme, name }) => theme.colors.blue};
`;


