import React, { useEffect, useState } from 'react'
import {
  FiltersContainer,
  HeaderFilter,
  ResetAllFiltersBTN
} from './style'

const Filters = ({ title = '', showClearButton = false, width = '100%', resetAllFilters, children }) => {
  return (
    <FiltersContainer width={'width'}>
      {/* <HeaderFilter>
        {title}
        {showClearButton && <ResetAllFiltersBTN onClick={resetAllFilters}>Clear</ResetAllFiltersBTN>}
      </HeaderFilter> */}
      {children}
    </FiltersContainer>
  )
}

export default Filters
