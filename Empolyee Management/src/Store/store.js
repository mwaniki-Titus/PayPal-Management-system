import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
// import {userApi} from '../features/user/userApi'
// import authReducer from "../features/user/authSllice";
import { employeeApi } from '../Features/employee/EmployeeApi';



export const store=configureStore({
    reducer:{
        // [userApi.reducerPath]:userApi.reducer,
        [employeeApi.reducerPath]:employeeApi.reducer,
      
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        // userApi.middleware,
        employeeApi.middleware,
       
        )
    }, 
)

setupListeners(store.dispatch)