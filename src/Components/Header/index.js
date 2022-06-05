import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from '../../Hooks/useRouter'
import { switchMode } from '../../Reducer/slices/AppSetting'
import SearchBar from '../SearchBar'
import {
    Container,
    Logo,
    SearchContainer,
    MenuContainer,
    MenuItem,
    Dropdown,
    DropdownItem,
    RightContainer,
    Slider,
    Toggle
} from './style'

const Header = () => {
    const router = useRouter()
    const [dropdownKey, setDropdownKey] = useState(null)
    const appSetting = useSelector(state => state.APP_SETTING)
    const dispatch = useDispatch()

    const backHome = () => {
        router.navigate('/')
    }

    return (
        <Container className={appSetting?.darkMode ? 'dark' : ''}>
            <Logo onClick={backHome} className={appSetting?.darkMode ? 'dark' : ''}>
                <img alt='logo' src='https://static.opensea.io/Logos/opensea-pride.svg' />
                OpenSea
            </Logo>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <MenuContainer className={appSetting?.darkMode ? 'dark' : ''}>
                <MenuItem
                    onMouseLeave={() => { setDropdownKey(null) }}
                    onMouseOver={() => { setDropdownKey(1) }}>
                    Explore
                    {dropdownKey === 1 &&
                        <Dropdown className={appSetting?.darkMode ? 'dark' : ''}>
                            <DropdownItem>All NFTs</DropdownItem>
                            <DropdownItem>Solana NFTs</DropdownItem>
                            <DropdownItem>Art</DropdownItem>
                        </Dropdown>}
                </MenuItem>
                <MenuItem
                    onMouseLeave={() => { setDropdownKey(null) }}
                    onMouseOver={() => { setDropdownKey(2) }}>
                    Stats
                    {dropdownKey === 2 &&
                        <Dropdown className={appSetting?.darkMode ? 'dark' : ''}>
                            <DropdownItem>Rankings</DropdownItem>
                            <DropdownItem>Activity</DropdownItem>
                        </Dropdown>}
                </MenuItem>
                <MenuItem
                    onMouseLeave={() => { setDropdownKey(null) }}
                    onMouseOver={() => { setDropdownKey(3) }}>
                    Resources
                    {dropdownKey === 3 &&
                        <Dropdown className={appSetting?.darkMode ? 'dark' : ''}>
                            <DropdownItem>Help Center</DropdownItem>
                            <DropdownItem>Partners</DropdownItem>
                        </Dropdown>
                    }
                </MenuItem>
                <MenuItem>Create</MenuItem>
            </MenuContainer>
            <RightContainer>
                <Slider onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        dispatch(switchMode())
                    }
                }} className={appSetting?.darkMode ? 'on' : ''}>
                    <Toggle className={appSetting?.darkMode ? 'on' : 'off'} />
                </Slider>
            </RightContainer>
        </Container>
    )
}

export default Header