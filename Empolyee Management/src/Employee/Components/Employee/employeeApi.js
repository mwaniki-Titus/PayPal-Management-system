import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Employees"],
    endpoints: (builder) =>({
        
        getEmployeebyID: builder.query({
            query: (EmployeeID) => `/users/getUserByID/${EmployeeID}`,
            providesTags: ["Employees"]
        }), 
       
    })
});

export const {  useGetEmployeebyIDQuery} = employeeApi;
