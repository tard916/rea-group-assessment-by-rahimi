import React, {useEffect, useState} from 'react';
import {Consumer} from "../../context/context";
import {search} from "../../context/reducer/search";

const SearchBox = () => {
  const [{items, statesList}, dispatch] = Consumer();
  const [formData, setFormData] = useState({
    searchText: '',
    state: 'All States',
    channel: 'sale'
  });
  const {searchText, channel} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    searchProperties(formData);
  }

  const searchProperties = (data) => {
    const result = search(data,items);
    dispatch({
      type: 'SEARCH_ITEMS',
      payload: result
    });
  };

  const saveToLocalStorage = () => {
    if (searchText !== '') {
      localStorage.setItem('searchFormData', JSON.stringify(formData));
    }
  }

  useEffect(() => {
    let restoredData;
    if (localStorage.getItem('searchFormData')){
      restoredData = JSON.parse(localStorage.getItem('searchFormData'));
      setFormData(restoredData);
      searchProperties(restoredData);
    }
  }, [setFormData])
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <form className="search-form" onSubmit={e => onSubmit(e)}>
          <div className="select-wrapper" onChange={e => onChange(e)}>
            <select name="state" className="form-control">
              {statesList.map(state => (
                <option value={state}>{state}</option>
              ))}
            </select>

          </div>
          <div className="search-input-wrapper">
            <i>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                   className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512">
                <path fill="#454545" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
                44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0
                6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
                 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
              </svg>
            </i>
            <input type="text" className="form-control" name="searchText" value={searchText}
                   onChange={e => onChange(e)}/>
            <button className="btn update-search">Update</button>
          </div>
          <div className="channel-switcher-buttons">
            <input type="radio" name="channel" checked={channel === "sale"} className="channel-radio" id="forSale"
                   value="sale"
                   onChange={e => onChange(e)}/>
            <label htmlFor="forSale" className="channel-label">For Sale</label>
            <input type="radio" name="channel" checked={channel === "rent"} className="channel-radio" id="forRent"
                   value="rent"
                   onChange={e => onChange(e)}/>
            <label htmlFor="forRent" className="channel-label">For Rent</label>
          </div>
        </form>
      </div>
      <div className="filter-wrapper">
        <div className="filter-row">
          <h3 className="title">Properties for sale in Malaysia with TTDI</h3>
          <button className="save-search" onClick={saveToLocalStorage}>
            Save Search
            <i>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                   className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7
                54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2
                50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7
                17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
              </svg>
            </i>
          </button>
        </div>
        <div className="filter-row">
          <div className="filters">
            <div className="filter-collapse-item">
              <div className="collapse-trigger">
                All Residential
                <i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                       className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
                    9.372-24.569 9.372-33.942 0z"/>
                  </svg>
                </i>
              </div>
              <div className="collapse-menu"/>
            </div>
            <div className="filter-collapse-item">
              <div className="collapse-trigger">
                Min Price (RM)
                <i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                       className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
                    9.372-24.569 9.372-33.942 0z"/>
                  </svg>
                </i>
              </div>
              <div className="collapse-menu"/>
            </div>
            <div className="filter-collapse-item">
              <div className="collapse-trigger">
                Max Price (RM)
                <i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                       className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224
                    284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667
                    22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                  </svg>
                </i>
              </div>
              <div className="collapse-menu"/>
            </div>
            <div className="filter-collapse-item">
              <div className="collapse-trigger">
                Built-up Size (sq. ft.)
                <i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                       className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
                    9.372-24.569 9.372-33.942 0z"/>
                  </svg>
                </i>
              </div>
              <div className="collapse-menu"/>
            </div>
            <div className="filter-collapse-item">
              <div className="collapse-trigger">
                Bedrooms
                <i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                       className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
                    9.372-24.569 9.372-33.942 0z"/>
                  </svg>
                </i>
              </div>
              <div className="collapse-menu"/>
            </div>
            <div className="filter-collapse-item">
              <div className="collapse-trigger">
                Show Properties
                <i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                       className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                    <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                    0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                    24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
                    9.372-24.569 9.372-33.942 0z"/>
                  </svg>
                </i>
              </div>
              <div className="collapse-menu"/>
            </div>
          </div>
          <div className="filter-sort">
            <span>Sort: </span>
            <div className="collapse-icon">
              <div className="text">Recent</div>
              <i>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                     className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                  <path fill="#454545" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
                  0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                  24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
                  9.372-24.569 9.372-33.942 0z"/>
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
