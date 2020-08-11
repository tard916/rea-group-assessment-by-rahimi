import React from 'react';
import Property from "./property/Property";
import {Consumer} from "../../context/context";

const SearchResult = () => {
  const [{ items, searchedItems }] = Consumer();
  return (
    <>
      {searchedItems.length > 0 ? searchedItems.map(item => (
        <Property key={item.id} item={item}/>
      )) : items.slice(0,19).map(item => (
        <Property key={item.id} item={item}/>
      ))}
    </>
  );
}

export default SearchResult;
