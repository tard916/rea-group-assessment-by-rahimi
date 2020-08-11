import React, {Fragment} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import SearchBox from "./components/searchBox/SearchBox";
import SearchResult from "./components/searchResult/SearchResult";
import Mortgage from "./components/mortgage/Mortgage";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Fragment>
      <Header/>
      <div className="main">
        <BreadCrumbs/>
        <SearchBox/>
        <SearchResult/>
        <Mortgage/>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
