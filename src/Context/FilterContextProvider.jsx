import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getProducts from "../components/utils/product";
import { FilterContext } from "./FilterContext";

// Provider Component
export const FilterProvider = ({ children }) => {
  const [products] = useState(getProducts());
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState({
    keyword: "",
    category: [],
    priceRange: [10000, 80000],
    platform: [],
  });

  // Temporary states for intermediate selections
  const [tempPriceRange, setTempPriceRange] = useState([10000, 80000]);
  const [tempPlatform, setTempPlatform] = useState([]);

  // Update functions for individual filter criteria
  const setFilterKeyword = (keyword) => setFilter((prev) => ({ ...prev, keyword }));
  const setFilterCategory = (category) => setFilter((prev) => ({ ...prev, category }));
  const setFilterPriceRange = (priceRange) => setFilter((prev) => ({ ...prev, priceRange }));
  const setFilterPlatform = (platform) => setFilter((prev) => ({ ...prev, platform }));

  // Apply filters based on the filter object
  const applyFilters = () => {
    // Transfer temporary selections to the main filter state
    setFilter((prev) => ({
      ...prev,
      priceRange: tempPriceRange,
      platform: tempPlatform,
    }));

    let filtered = products;

    // Filter by keyword
    if (filter.keyword) {
      filtered = filtered.filter((product) =>
        product.keywords.some((k) =>
          k.toLowerCase().includes(filter.keyword.toLowerCase())
        )
      );
    }

    // Filter by category
    if (filter.category.length) {
      filtered = filtered.filter(
        (product) =>
          filter.category.includes(product.category) ||
          filter.category.includes(product.subCategory)
      );
    }

    // Filter by price range
    const [minPrice, maxPrice] = tempPriceRange;
    filtered = filtered.filter(
      (product) => product.pricing >= minPrice && product.pricing <= maxPrice
    );

    // Filter by platform
    if (tempPlatform.length) {
      filtered = filtered.filter((product) =>
        tempPlatform.includes(product.platform)
      );
    }

    setFilteredProducts(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilter({
      keyword: "",
      category: [],
      priceRange: [10000, 80000],
      platform: [],
    });
    setTempPriceRange([10000, 80000]);
    setTempPlatform([]);
    setFilteredProducts(products);
  };

  // Apply filters automatically on filter change, excluding temp states
  useEffect(() => {
    let filtered = products;

    // Filter by keyword
    if (filter.keyword) {
      filtered = filtered.filter((product) =>
        product.keywords.some((k) =>
          k.toLowerCase().includes(filter.keyword.toLowerCase())
        )
      );
    }

    // Filter by category
    if (filter.category.length) {
      filtered = filtered.filter(
        (product) =>
          filter.category.includes(product.category) ||
          filter.category.includes(product.subCategory)
      );
    }

    setFilteredProducts(filtered);
  }, [filter.keyword, filter.category]);

  return (
    <FilterContext.Provider
      value={{
        products,
        filteredProducts,
        filter,
        tempPriceRange,
        tempPlatform,
        setTempPriceRange,
        setTempPlatform,
        setFilterKeyword,
        setFilterCategory,
        setFilterPriceRange,
        setFilterPlatform,
        applyFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
