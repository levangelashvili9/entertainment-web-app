import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes, GlobalStyles } from "./themes";
import { Route, Routes } from "react-router-dom";
import Data from "./data.json";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";

function App() {
  const [data, setData] = useState(Data);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(0);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              setData={setData}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              data={data}
              setData={setData}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route
          path="/series"
          element={
            <Series
              data={data}
              setData={setData}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              data={data}
              setData={setData}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
