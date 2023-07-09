import { createSlice } from '@reduxjs/toolkit';

const startState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: startState,

  reducers: {
    addContactsSlice(state, action) {
      state.push(action.payload);
    },

    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addContactsSlice, deleteContacts } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
