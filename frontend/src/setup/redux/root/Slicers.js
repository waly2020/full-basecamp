import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../slices/UserSlicer';

export const rootReducer = combineReducers({
    user : userSlice.reducer
})