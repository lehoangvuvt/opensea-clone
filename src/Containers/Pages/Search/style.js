import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const FiltersContainer = styled.div`
  margin-top: 70px;
  width: 25%;
  position: fixed;
  height: calc(100vh - 140px);
  overflow-y: auto;
`

export const Header = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  box-sizing: border-box;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 101;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-left: 25px;
`;

export const ToggleFilterButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  img {
    max-width: 60%;
    margin-top: 5px;
  }
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
`

export const NftsContainer = styled.div`
  width: 75%;
  margin-left: 25%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 80px;
  gap: 20px;
  &.expand {
    width: 100%;
    margin-left: 0%;
  }
`

export const Nft = styled.div`
  width: 30%;
  padding-bottom: 30%;
  border-radius: 8px;
  background-size: cover;
  background-image: url("${props => props.image}");
  background-position: center;
  cursor: pointer;
  &.expand {
    width: 23%;
    padding-bottom: 23%;
  }
`
