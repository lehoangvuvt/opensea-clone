import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    &.dark {
        background: black;
    }
`

export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 550px;
    background: white;  
    color: black;
    &.dark {
        background: black;
        color: white;
    }
`

export const BlurBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    filter: blur(15px);
    background-position: center;    
    background-image: url("${props => props.image}");
    background-size: cover;
`

export const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;    
    justify-content: center;
    align-items: center;
`

export const LeftBanner = styled.div`
    width: 35%;
    height: 100%;   
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`

export const BigText = styled.div`
    font-weight: 800;
    font-size: 43px;
    margin-bottom: 25px;
    line-height: 50px;
`

export const SmallText = styled.div`
    font-size: 24px;
    line-height: 35px;
    opacity: 0.75;
`

export const RightBanner = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:flex-end;
`

export const NftContainer = styled.div`
    width: 520px;
    height: 450px;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    flex-flow: column wrap;
    overflow: hidden;
    &:hover{
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4); 
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center;
`

export const Buttons = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
    align-items: center;
    padding-top: 20px;
`

export const SmallBanner = styled.div`
    width: 80%;
    height: 130px;
    margin-top: 80px;
    margin-bottom: 100px;   
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center;
    margin: 70px auto;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 23px;
    color: rgb(53, 56, 64);
`