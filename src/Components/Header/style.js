import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index: 100;
    height: 70px;
    top: 0;
    left: 0;
    // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
    display: flex;
    flex-flow: row wrap;
    padding-left: 25px;
    box-sizing: border-box;
    background: white;
    z-index: 102;
    &.dark {
        background: black;
    }
`

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
    width: 20%;
`

export const Logo = styled.div` 
    display: flex;
    height: 100%;
    flex-flow: row wrap
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    color: rgba(0,0,0,0.9);
    &.dark {
        color white;
    }
    img {
        width: 40px;
    }
    p{
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 20px;
        letter-spacing: 0.25px;
    }
`

export const SearchContainer = styled.div`
    height: 100%;
    width: 39%;
    display: flex;
    align-items: center;
`

export const MenuContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    color: rgba(4, 17, 29, 0.8);
    &>div{
        &:hover{
            color: rgb(4, 17, 29);
        }
    }
    &.dark {
        color: rgba(255, 255, 255, 0.8);
        &>div{
            &:hover{
                color: white;
            }
        }
    }
`

export const MenuItem = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    font-size: 15px;
`

export const Dropdown = styled.div`
    position: absolute;
    width: 220px;
    top: 70px;
    left: 0px;
    right: 0px;
    z-index: 1;
    box-shadow: 0px 11px 12px 0px rgba(0,0,0,0.4);
    border: 1px solid rgba(0,0,0,0.1);
    animation: appear 0.4s ease;
    overflow: hidden;
    border-radius: 0px 0px 5px 5px;
    color: rgb(4, 17, 29);
    background: white !important;
    &.dark {
        color: white;
        background: black !important;
    }
    &.last {
        left: -140px;
    }
    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const DropdownItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    font-size: 15px;
    font-weight: bold;
    border: 1px solid rgba(0,0,0,0);
    box-sizing: border-box;
    transition: all 0.2s ease;
    &:hover{
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
        border: 1px solid rgba(0,0,0,0.1);
    }
`

export const RightContainer = styled.div`
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 25px;
`

export const Slider = styled.div`
    width: 50px;
    height: 25px;
    background: red;
    border-radius: 20px; 
    display:flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    background: rgba(0,0,0,0.2);
    justify-content: flex-start;
    &.on{
        background: #0072ff;
    }
`

export const Toggle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    cursor: default;
    z-index: 100;
    transform: translateX(0px);
    &.off{
        transform: translateX(0px);
        animation: rightToLeft 0.25s ease;
        @keyframes rightToLeft {
            from {
                transform: translateX(22px);
            }
            to {
                margin-right: calc(100% - 22px);
            }
        }
    }
    &.on{
        transform: translateX(22px);
        animation: leftToRight 0.25s ease;
        @keyframes leftToRight {
            from {
                transform: translateX(0px);
            }
            to {
                transform: translateX(22px);
            }
        }
    }
`

export const LoginButton = styled.button`
    width: 60%;
    height: 35px;
    background: #0072ff;
    color: white;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    opacity: 0.7;
    transition: opacity 0.25s ease;
    &:hover{
        opacity: 1;
    }
`