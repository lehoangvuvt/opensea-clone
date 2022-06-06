import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 43px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding-left: 10px;
    background: white;
    img {
        max-width: 24px;
        margin-right: 10px;
        &:nth-child(3) {
            max-width: 22px;
            margin-left: 5px;
            cursor: pointer;
        }
    }
    &.focus {
        border: 1px solid rgba(0,0,0,0);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        animation: focus 0.2s ease;
        @keyframes focus {
            from {
                box-shadow: none;
            }
            to {
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
            }
        }
    }
`

export const SearchInput = styled.input`
    flex: 1;
    height: 35px;
    border:none;
    font-weight: 500;
    font-size: 15px;
    outline: none;
    box-sizing: border-box;
    color: rgba(0,0,0,0.85);
    background: none;   
    &::placeholder{
        color: rgba(0,0,0,0.5);
    }
`

export const Dropdown = styled.div`
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.1);
    display: flex;
    flex-flow: column wrap;
`

export const DropdownItemTitle = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    color: rgba(0,0,0,0.75);
    text-transform: uppercase;
    letter-spacing: 0.5px;
`
export const DropdownItem = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    flex-flow: row wrap;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: bold;
    font-size: 12px;
    color: rgba(0,0,0,1);
    letter-spacing: 0.5px;
    box-sizing: border-box;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    }
`
export const DropdownItemLeft = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
        max-width: 70%;
    }
`

export const DropdownItemRight = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 4px;
`

export const DropdownTopItemRight= styled.div`
    width: 100%;
    color: black;
    font-size: 13px;
    font-weight: bold;
`

export const DropdownBottomItemRight= styled(DropdownTopItemRight)`
    color: rgba(0,0,0,0.6);
    font-size: 12px;
`