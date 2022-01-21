import { createSlice } from '@reduxjs/toolkit';

//add a new slice
const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers:{
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
    
})

//export the slice
export const authActions = authSlice.actions;

export default authSlice.reducer;