import { createSlice } from '@reduxjs/toolkit';
import { store } from '.';

const errorSlice = createSlice({
  name: 'errorMessage',
  initialState: {
    errorMessage: '',
  },
  reducers: {
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
export const errorMess = (state: ReturnType<typeof store.getState>) =>
  state.errorMessage.errorMessage;
