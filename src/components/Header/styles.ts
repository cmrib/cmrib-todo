import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.gray_700};
    height: ${RFValue(175)}px;
    align-items: center;
    justify-content: center;
`