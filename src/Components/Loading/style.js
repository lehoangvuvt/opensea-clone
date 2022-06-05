import styled from 'styled-components'

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%:
    flex-flow: row wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    text-align:center;  
`

export const BaseDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    @keyframes bounce {
        from {
            transform: translate3d(0, 0px, 0);
        }
        to {
            transform: translate3d(0, -5px, 0);
        }
    }
`

export const DotOne = styled(BaseDot)`
    background: rgba(45, 85, 255, 1);
    animation: bounce 0.5s 0s ease infinite alternate;
`
export const DotTwo = styled(BaseDot)`
    background: rgba(45, 85, 255, 0.6);
    animation: bounce 0.5s 0.25s ease infinite alternate;
`
export const DotThree = styled(BaseDot)`
    background: rgba(45, 85, 255, 0.4);
    animation: bounce 0.5s 0.5s ease infinite alternate;
`