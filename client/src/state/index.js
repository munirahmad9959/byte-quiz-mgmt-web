import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",      
    user: null,         
    token: null,        
    isLoggedIn: false,   
    role: null,         
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = Boolean(action.payload.user) // User is logged in
            state.role = action.payload.user.role; // Assume `user` contains a `role` field
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false; // User is logged out
            state.role = null;
        },
    }
});

// Export actions
export const { setMode, setLogin, setLogout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
