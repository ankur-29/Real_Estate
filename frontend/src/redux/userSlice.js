import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
        },
        logoutUserSuccess: (state) => {
            console.log(state);
            state.currentUser = null;
        },
    }
});

export const { signInSuccess, logoutUserSuccess } = userSlice.actions;

export default userSlice.reducer;