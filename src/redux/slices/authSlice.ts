import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false, // Inicialmente o usuário não está logado
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true; // Muda o estado para logado
    },
    logout(state) {
      state.isLoggedIn = false; // Muda o estado para deslogado
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
