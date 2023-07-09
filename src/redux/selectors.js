export const selectContacts = ({ contacts: { items } }) => items;
export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
