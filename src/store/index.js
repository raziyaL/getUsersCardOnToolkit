import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './UsersSlice';
export const store = configureStore({
    reducer:{
        UserSlice
    }
})