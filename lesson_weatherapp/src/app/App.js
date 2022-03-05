import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Search from "../screen/Search";
import Result from "../screen/Result";

function App() {
  return (
    // <div>
    //   <Search />
    // </div>
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
