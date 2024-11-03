import "./App.css";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import { FilterProvider } from "./Context/FilterContextProvider";

function App() {
  return (
    <>
      <FilterProvider>
        <Navbar />
        <ProductListing />
      </FilterProvider>
    </>
  );
}

export default App;
