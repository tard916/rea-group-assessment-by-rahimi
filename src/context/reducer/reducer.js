import data from '../data/search-results-page.json'

const {items} = data;
const statesList = [
  'All States',
  'Selangor',
  'Kuala Lumpur',
  'Johor',
  'Penang',
  'Perak',
  'Negeri Sambilan',
  'Pahang', 'Sabah',
  'Sarawak',
  'Kedah',
  'Putrajaya',
  'Kelantan',
  'Terengganu',
  'Perlis',
  'Labuan'
];

export const initialState = {
  items,
  statesList,
  searchedItems: []
};

const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SEARCH_ITEMS':
      return {
        ...state,
        searchedItems: payload,
      };
    default:
      return state;
  }
};

export default reducer;
