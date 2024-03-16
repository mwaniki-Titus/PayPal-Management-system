import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {userApi} from '../features/user/userApi'
import authReducer from "../features/user/authSllice";



export const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
      
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        userApi.middleware,
       
        )
    }, 
)

setupListeners(store.dispatch)