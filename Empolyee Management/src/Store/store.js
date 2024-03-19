import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
// import {userApi} from '../Features/User/UserApi'
// import authReducer from "../features/user/authSllice";
import { employeeApi } from '../Features/User/UserApi';
import { cashAdvanceApi } from '../Features/cashAdvance/cashAdvanceApi';



export const store=configureStore({
    reducer:{
        // [userApi.reducerPath]:userApi.reducer,
        [employeeApi.reducerPath]:employeeApi.reducer,
        [cashAdvanceApi.reducerPath]:cashAdvanceApi.reducer,

      
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        // userApi.middleware,
        employeeApi.middleware,
        cashAdvanceApi.middleware,
       
        )
    }, 
)

setupListeners(store.dispatch)