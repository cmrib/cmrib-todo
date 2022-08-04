import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 14px;
    padding-top: 40px;
    align-items: center;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.gray_400};
    margin: 0 auto;
`;


export const Text = styled.Text`
    margin-top: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.gray_300};

`;

export const Create = styled.Text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;    
    margin-top: ${RFValue(4)}px; 
 `;

