import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

interface Props {
    done: boolean;
}

export const TaskBox = styled.View`   
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;  
    background-color: ${({ theme }) => theme.colors.gray_400};
    border-radius: 8px;  
    padding: 12px 14px;   
`;

export const Title = styled.Text<Props>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.gray_100};
    text-align: left;
    max-width: 80%;
   
    ${({ done, theme }) => done && `
        text-decoration: line-through;
        text-decoration-color: ${theme.colors.gray_300};
        color: ${theme.colors.gray_300}
    `
    }
`;

export const TrashIcon = styled(Feather)`
    font-size: 18px;   
    color: ${({ theme }) => theme.colors.gray_300};
`;

export const CheckIcon = styled(Feather)`
    font-size: 22px; 
    color: ${({ theme }) => theme.colors.blue}  ;
`;


export const CheckButton = styled.TouchableOpacity`  

`

export const TrashButton = styled.TouchableOpacity`
     
`;