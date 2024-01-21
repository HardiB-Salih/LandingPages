import { createSlice } from '@reduxjs/toolkit';
// ----------------------------------------------------------------------

const initialState = {
  mode: 'light', // can be Light, Dart, System
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function UpdateMode(mode) {
  return dispatch => {
    dispatch(slice.actions.updateMode({ mode }));
  };
}
