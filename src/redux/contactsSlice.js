import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import data from '../data/data.json';

const persistConfig = {
  key: 'contacts',
  storage,
  // blacklist: ['id'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: data },

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
