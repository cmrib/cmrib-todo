import styled from 'styled-components/native';
import { TextInput } from "react-native"
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TextInput)`
    height: 100%;        
    font-family: ${({ theme }) => theme.fonts.regular};  
    border-radius: 6px;
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.gray_500};
    color: ${({ theme }) => theme.colors.gray_100};   
    padding-left: 16px;
    flex-grow: 1;
    margin-right: 4px;    
`