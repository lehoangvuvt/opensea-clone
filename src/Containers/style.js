import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-top: 70px;
    height: 1000px;
    color: black;
    &.dark {
        background: black;
        color: white;
    }
    &.loading {
        margin-top: 0px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`