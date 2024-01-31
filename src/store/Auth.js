import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isloggedin: false,
  tokenid: null,
  email: null,
  role: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isloggedin = true;
      state.tokenid = action.payload.idToken;
      state.email = action.payload.email;
      state.admin = action.payload.admin;
    },
    logout(state) {
      state.isloggedin = false;
      state.tokenid = null;
      state.email=null;
      state.role=null;
    },
  },
});

export const { login, logout } = authSlice.actions; 

export default authSlice.reducer; 
