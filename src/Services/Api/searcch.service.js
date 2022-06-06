import BaseService from "./base.service"

const SearchService = {
    getSuggestion(searchtxt) {
        return BaseService.get(`search/suggestion?&q=${searchtxt}`)    
    }
}

export default SearchService