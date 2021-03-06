import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 10px;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    border: 1px solid #0072ff;
    box-sizing: border-box;
    transition: all 0.2s ease;
    &.primary{
        background: #0072ff;
        color: white;
        &:hover{
            filter: brightness(80%);
        }
    }
    &.secondary{
        background: white;
        color: #0072ff;
        &:hover{
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25); 
        }
    }
`