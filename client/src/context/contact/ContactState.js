import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ram Kc',
        email: 'ramkc@gmail.com',
        phone: '112-1212-121-2121',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Shyam Kc',
        email: 'Shyamkc@gmail.com',
        phone: '213-1212-121-2121',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Hari Kc',
        email: 'harikc@gmail.com',
        phone: '422-1212-121-2121',
        type: 'professional'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //ADD_CONTACT
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //DELETE_CONTACT
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //SET_CURRENT_CONTACT
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //CLEAR_CURRENT_CONTACT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //UPDATE_CONTACT
  const updateContact = contact => {
    dispatch({ type: UPDATE_CURRENT, payload: contact });
  };
  //FILTER_CONTACTS

  //CLEAR_FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
