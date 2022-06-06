import { useFilters } from "../../../Hooks/useFilters";
import MultipleFilter from "../../../Components/Marketplace/Filter/Multiple";
import Filters from "../../../Components/Marketplace/Filters";
import {
  Container,
  Header,
  FiltersContainer,
  NftsContainer,
  Nft,
  ToggleFilterButton,
} from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "../../../Hooks/useRouter";

const Search = () => {
  const router = useRouter();
  const { currentQueryString, updateQuery, resetFilter, queries } = useFilters();
  const [isShowFilter, setShowFilter] = useState(true);
  useEffect(() => {
    if (currentQueryString) {
      router.navigate(`/assets/${currentQueryString}`);
    }
  }, [currentQueryString]);
  return (
    <Container>
      <Header>
        <ToggleFilterButton 
        onClick={() => {
            setShowFilter(state => !state)
        }}
        >
          <img
            alt="toggle-icon"
            src={
              "https://icons-for-free.com/download-icon-filter-1324438826391415094_512.png"
            }
          />
        </ToggleFilterButton>
      </Header>
      {isShowFilter && (
        <FiltersContainer>
          <Filters>
            <MultipleFilter
              flexDirection="column"
              filterType="checkbox"
              headerName={"Status"}
              keys={["Buy Now", "On Auction", "New", "Has Offers"]}
              selectedKeys={queries.get("status")}
              propertyName="status"
              onKeysChange={updateQuery}
              resetFilter={resetFilter}
            />
            <MultipleFilter
              flexDirection="column"
              filterType="checkbox"
              headerName={"Category"}
              keys={[
                "Art",
                "Collectibles",
                "Domain Names",
                "Music",
                "Photography",
                "Sports",
              ]}
              selectedKeys={queries.get("category")}
              propertyName="category"
              onKeysChange={updateQuery}
              resetFilter={resetFilter}
            />
          </Filters>
        </FiltersContainer>
      )}
      <NftsContainer className={!isShowFilter ? 'expand' : ''}>
        <Nft image={'https://lh3.googleusercontent.com/5hbL9BWJG2HT0DVemc2mhE95spiYWiYeI5peQ7pQP7wRXIzeQyYCWGoL9ktzvk1UCqi5yhyIWMRwOx2u7GHGB4tp=w349'} className={!isShowFilter ? 'expand' : ''}/>
        <Nft image={'https://openseauserdata.com/0x06012c8cf97bead5deae237070f9587f8e7a266d/901752-1557548684.png'} className={!isShowFilter ? 'expand' : ''}/>
        <Nft image={'https://lh3.googleusercontent.com/ToCFixBPXSjnU7rVw2L_N7fbYpMxe-S6-OPi-M3dGYF2H0ic9-RhabiM8LOZ91S7nxd1fJcXzuGeWRQptaPuNRBlne4crJUa0q0_cA=w349'} className={!isShowFilter ? 'expand' : ''}/>
        <Nft image={'https://lh3.googleusercontent.com/-9nWFi5tjMDfX9YMnBqWwKqxuATpRVFI5TztMuNKQqDW8iZaPs_Y0w97Inr7iCRJI3mKq5vc71HrGY3OhAcdSRrhgyf0F6y83sN6=w349'} className={!isShowFilter ? 'expand' : ''}/>
        <Nft image={'https://lh3.googleusercontent.com/Qpfc5Vmv7yeuUPIiLh-9RF36AlUv6OGv3EeaStBJgulO3CkdOlerj2KbQHX6h5ixHbeChDvPBQgEkTyn4vzbfcLWzjQnwYD0CruhqA=w349'} className={!isShowFilter ? 'expand' : ''}/>
        <Nft image={'https://lh3.googleusercontent.com/HOTDhvokiPoIgWmirqjvqPhKpY-7y7JwlaMMVgZlUYwW0QaMlZEaar12cMgGZ7kNdrjXyQqGF6ljPOzfAdUmVpGKxsg56sWCWCzWeHY=w349'} className={!isShowFilter ? 'expand' : ''}/>
      </NftsContainer>
    </Container>
  );
};

export default Search;
