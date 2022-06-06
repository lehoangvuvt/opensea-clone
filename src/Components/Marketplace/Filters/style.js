import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-flow: column wrap;
  background: white;
  padding-top: 10px;
  animation: onChangeHeight 0.2s ease;

  .ant-collapse-item {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    background: white !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
  }
  .ant-collapse-icon-position-left {
    border: none !important;
  }
  .ant-collapse-icon-position-right {
    border: none !important;
  }
  .ant-collapse-content {
    background: rgba(0, 0, 0, 0.9);
    border: none !important;
  }
  .ant-collapse-content-box {
    background: white !important;
    padding: 0px;
  }
  .ant-collapse-header {
    background: white !important;
    color: black !important;
    font-weight: bold !important;
    font-size: 16px !important;
  }
`

export const HeaderFilter = styled.div`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: black;
  padding-left: 15px;
  padding-right: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const ResetAllFiltersBTN = styled.button`
  background: transparent;
  font-size: 14px;
  color: #046cfc;
  cursor: pointer;
  font-weight: bold;
  border: none;
  outline: none;
  filter: brightness(90%);
  &:hover {
    filter: brightness(110%);
  }
`