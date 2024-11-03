import { createContext } from "react";

// Create the FilterContext with default values
export const FilterContext = createContext({
  products: [],
  filteredProducts: [],
  filter: {
    keyword: "",
    category: [],
    priceRange: [10,100],
    platform: [],
  },
  tempPriceRange: [100, 100], // Temporary state for price range
  tempPlatform: [], // Temporary state for platform
  setFilterKeyword: () => {},
  setFilterCategory: () => {},
  setFilterPriceRange: () => {},
  setFilterPlatform: () => {},
  setTempPriceRange: () => {},
  setTempPlatform: () => {},
  applyFilters: () => {},
  clearFilters: () => {},
});
