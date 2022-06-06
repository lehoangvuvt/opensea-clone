import { useFilters } from "../../../Hooks/useFilters";
import MultipleFilter from "../../../Components/Marketplace/Filter/Multiple";
import Filters from "../../../Components/Marketplace/Filters";
import {
  Container,
  Header,
  FiltersContainer,
  NftsContainer,
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
      <NftsContainer></NftsContainer>
    </Container>
  );
};

export default Search;
