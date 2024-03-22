import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
// import {userApi} from '../Features/User/UserApi'
// import authReducer from "../features/user/authSllice";
import { employeeApi } from '../Features/User/UserApi';
import { cashAdvanceApi } from '../Features/cashAdvance/cashAdvanceApi';
import { positionApi } from '../Features/position/PositionApi';
import { deductionApi } from '../Features/deduction/deductionApi';
import { overtimeApi } from '../Features/Overtime/overtimeApi';
import { scheduleApi } from '../Features/schedule/ScheduleApi';
import { attendanceApi } from '../Features/attendance/attendanceApi';


export const store=configureStore({
    reducer:{
        // [userApi.reducerPath]:userApi.reducer,
        [employeeApi.reducerPath]:employeeApi.reducer,
        [cashAdvanceApi.reducerPath]:cashAdvanceApi.reducer,
        [positionApi.reducerPath]:positionApi.reducer,
        [deductionApi.reducerPath]:deductionApi.reducer,
        [overtimeApi.reducerPath]:overtimeApi.reducer,
        [scheduleApi.reducerPath]:scheduleApi.reducer,
        [overtimeApi.reducerPath]:overtimeApi.reducer,
        [attendanceApi.reducerPath]:attendanceApi.reducer,

      
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        // userApi.middleware,
        employeeApi.middleware,
        cashAdvanceApi.middleware,
        positionApi.middleware,
        deductionApi.middleware,
        overtimeApi.middleware,
        scheduleApi.middleware,
        overtimeApi.middleware,
        attendanceApi.middleware,

        )
    }, 
)

setupListeners(store.dispatch)