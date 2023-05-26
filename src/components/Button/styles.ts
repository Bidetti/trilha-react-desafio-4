import styled from 'styled-components';
import { IButtonStyle } from './types';


export const ButtonContainer = styled.button<IButtonStyle>`
    width: 100%;
    height: 42px;
    background-color: #0D8E06;
    color: #FFF;

    border: 1px solid #2683DB;
    border-radius: 21px;
    opacity: ${({opacity}) => opacity};
    &:hover {
        background-color: #32AA1F; 
        cursor:pointer;
    }
`