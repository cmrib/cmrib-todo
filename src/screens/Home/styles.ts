import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'


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