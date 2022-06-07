import styled from 'styled-components'
import { Collapse } from "antd";

export const FilterContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-flow: ${props => props.flexDirection} wrap;
  gap: 10px;
  padding: 10px 10px 25px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const MyCollapse = styled(Collapse)`
  border: none !important;
  background: transparent;
  .ant-collapse-arrow{
    margin-right: 18px !important;
  }
`

export const PanelHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding-left: 12px;
  button {
    background: transparent;
    cursor: pointer;
    border: none; 
    outline: none;
    font-size: 14px;
    color: #046cfc;
    font-weight: bold;
    filter: brightness(90%);
    &:hover {
      filter: brightness(110%);
    }
  }
`

export const Tag = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: #424242;
  height: 28px;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 13px;
  &.selected {
    background: #0072ff;
  }
  &:hover {
    background: #616161;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  color: rgb(4, 17, 29);
  font-weight: 400;
  font-size: 15px;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0,0,0,0.04);
    .not-selected {
      border: 1px solid #0072ff;
    }
  }
`

export const Checkbox = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  transition: border 0.2s ease;
  pointer-events: none;
  img {
    width: 0px;
    height: 0px;
  }
  &.selected {
    background: #0072ff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 12px;
      height: 12px;
    }
    animation: appear 0.2s ease;
    @keyframes appear {
      from {
        background: transparent;
      }
      to {
        background: #0072ff;
      }
    }
  }
`

export const Circle = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: transparent;
  margin-right: 10px; 
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: center;
  transition: all 0.2s ease;
  box-sizing: border-box;
  &.selected{
    background: #0072ff;
    border: 1px solid #0072ff;
    &::after{
      position: absolute;
      content: '';
      width: 22px;
      height: 22px;
      box-sizing: border-box;
      border-radius: 50%;
      background: white;
      transform: scale(0.5);
      margin: auto;
    }
  }
`
