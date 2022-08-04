import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    background: ${({ theme }) => theme.colors.gray_600};
    flex: 1;
    width: 100%;   
`;

export const InputContainer = styled.View`
    padding: 0 24px;
    height: 54px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: -25px;
    width: 100%;
`;

export const AddButton = styled.TouchableOpacity`
    height: 100%;
    width: 54px;
    background-color: ${({ theme }) => theme.colors.blue};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const Icon = styled(Feather)`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.gray_100};     
`;

export const Info = styled.View`
    margin-top: ${RFValue(32)}px;
    flex-direction: row;
    padding: 0 24px;
    justify-content: space-between;  
    margin-bottom: 20px; 
`;

export const Created = styled.Text`
    color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;

export const Done = styled.Text`
    color: ${({ theme }) => theme.colors.purple};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;  
`;

export const Background = styled.View`
    margin-left: 8px;
    padding: 2px 8px;
    background-color: ${({ theme }) => theme.colors.gray_400};
    border-radius: 10px;  
`;

export const Counter = styled.Text`
    color: ${({ theme }) => theme.colors.gray_200};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;