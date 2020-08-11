export const search = (formData, items) => {
  const {searchText, channel, state} = formData;
  return items.filter(item => {
    if ((item.prices[0].type === channel) &&
      (item.multilanguagePlace['en-GB'].level1.toLowerCase().includes(state.toLowerCase()) ||
      item.title.toLowerCase().includes(searchText.toLowerCase()))) {
      console.log(item);
      return item;
    }
  });
}
