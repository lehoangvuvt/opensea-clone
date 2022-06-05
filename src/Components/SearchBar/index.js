import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from '../../Hooks/useRouter'
import { debounce } from 'lodash'
import {
    Container,
    Dropdown,
    DropdownItemTitle,
    DropdownItem,
    DropdownItemLeft,
    DropdownItemRight,
    DropdownTopItemRight,
    DropdownBottomItemRight,
    SearchInput,
} from './style'
import Loading from '../Loading'

const SearchBar = () => {
    const getSuggestion = async (searchText) => {
        setDropdownResults([])
        setLoading(true)
        const response = await axios({
            url: `https://tiki.vn/api/v2/search/suggestion?&q=${searchText}`
        })
        setTimeout(() => {
            setDropdownResults(response.data.data)
            setLoading(false)
        }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFn = useCallback(debounce(getSuggestion, 500), []);
    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    const [isFocus, setFocus] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [dropdownResults, setDropdownResults] = useState([])

    const handleChange = (e) => {
        setSearchText(e.target.value)
        if (e.target.value !== '' && e.target.value.length > 1) {
            debounceFn(e.target.value)
        } else {
            setDropdownResults([])
        }
    }

    const handleKeyDown = (e) => {
        if (e.code === 'Enter' || e.code === 13) {
            router.navigate(`/assets?q=${searchText}`)
            setDropdownResults([])
            setFocus(false)
        }
    }

    useEffect(() => {
        const query = router.query
        if (query?.q) {
            setSearchText(query.q)
        }
    }, [])

    return (
        <Container className={isFocus ? 'focus' : ''}>
            <img alt='search-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' />
            <SearchInput
                placeholder='Search items, collections, and accounts'
                value={searchText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }} />
            {searchText?.length > 0 &&
                <img
                    onClick={() => {
                        setSearchText('')
                        setDropdownResults([])
                    }}
                    alt='clear-icon'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png' />
            }
            {dropdownResults?.length > 0 && isFocus && !isLoading &&
                <Dropdown>
                    <DropdownItemTitle>COLLECTIONS</DropdownItemTitle>
                    {dropdownResults.slice(0, 5).map(item =>
                        <DropdownItem>
                            <DropdownItemLeft>
                                <img alt='org-icon' src='https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s64' />
                            </DropdownItemLeft>
                            <DropdownItemRight>
                                <DropdownTopItemRight>
                                    {item.keyword}
                                </DropdownTopItemRight>
                                <DropdownBottomItemRight>
                                    10.000 items
                                </DropdownBottomItemRight>
                            </DropdownItemRight>
                        </DropdownItem>
                    )}
                    <DropdownItem>
                        <DropdownItemRight>
                            <DropdownBottomItemRight>
                                Press Enter to search all items
                            </DropdownBottomItemRight>
                        </DropdownItemRight>
                    </DropdownItem>
                </Dropdown>}
            {isLoading &&
                <Dropdown>
                    <DropdownItemTitle>
                        <Loading />
                    </DropdownItemTitle>
                    <DropdownItem>
                        <DropdownItemRight>
                            <DropdownBottomItemRight>
                                Press Enter to search all items
                            </DropdownBottomItemRight>
                        </DropdownItemRight>
                    </DropdownItem>
                </Dropdown>
            }
        </Container>

    )
}

export default SearchBar