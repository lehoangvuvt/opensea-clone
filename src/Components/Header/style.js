import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index: 100;
    height: 70px;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
    display: flex;
    flex-flow: row wrap;
    padding-left: 25px;
    box-sizing: border-box;
    background: white;
    &.dark {
        background: black;
    }
`

export const Logo = styled.div`
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 20px;
    width: 23%;
    img {
        width: 40px;
    }
    &.dark {
        color white;
    }
`

export const SearchContainer = styled.div`
    height: 100%;
    width: 39%;
    display: flex;
    align-items: center;
`

export const MenuContainer = styled.div`
    width: 27%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
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
    width: calc(100% / 4);
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
`

export const Dropdown = styled.div`
    position: absolute;
    width: 220px;
    top: 70px;
    left: 0px;
    z-index: 1;
    box-shadow: 0px 11px 12px 0px rgba(0,0,0,0.5);
    border: 1px solid rgba(0,0,0,0.1);
    animation: appear 0.4s ease;
    overflow: hidden;
    border-radius: 0px 0px 5px 5px;
    color: rgb(4, 17, 29);
    background: white;
    &.dark {
        color: white;
        background: black;
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
    height: 55px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    font-size: 16px;
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
    justify-content: flex-end;
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
        background: blue;
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