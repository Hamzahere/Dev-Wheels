import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      if (action.payload === null) {
        state.currentUser = null;
      } else {
        const { displayName, email, photoURL } = action.payload;
        state.currentUser = {
          displayName,
          email,
          photoURL,
        };
      }
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
