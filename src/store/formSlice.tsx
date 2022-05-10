import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  country: '',
  genderValue: '',
  agree: '',
  url: '',
};

const formSlice = createSlice({
  name: 'formsInputs',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload.lastName;
    },
    setBirthDate: (state, action) => {
      state.birthDate = action.payload.birthDate;
    },
    setCountry: (state, action) => {
      state.country = action.payload.country;
    },
    clear: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.birthDate = '';
      state.country = '';
    },
  },
});

export const { setFirstName, setLastName, setCountry, setBirthDate, clear } = formSlice.actions;
export default formSlice.reducer;
