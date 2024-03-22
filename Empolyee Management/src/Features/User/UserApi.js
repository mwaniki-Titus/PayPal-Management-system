import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Employees"],
    endpoints: (builder) =>({
        getEmployees: builder.query({
            query: () => "users/getAllUsers",
            providesTags: ["Employees"]
        }),

        getEmployeebyID: builder.query({
            query: (EmployeeID) => `/users/getUserByID/${EmployeeID}`,
            providesTags: ["Employees"]
        }),
        
        loginEmployee: builder.mutation({
            query:(employee) => ({
                url: "users/login",
                method: "POST",
                body: employee,
            }),
            // invalidatesTags: ["Employees"]
        }),
        addEmployee: builder.mutation({
            query: (employee) =>({
                url:"/users/addNewEmployee",
                method: "POST",
                body: employee,
            }),
            invalidatesTags: ["Employees"],
        }),
        deleteEmployee: builder.mutation({
            query:(EmployeeID) => ({
                url:`/users/deleteEmployee/${EmployeeID}`,
                method: "DELETE",
            })
        }),

        updateEmployee: builder.mutation({
            query:(EmployeeID) => ({
                url:`/users/UpdateEmployeeByID/${EmployeeID}`,
                method:"PUT"
            })

        }) 
    })
});

export const {useUpdateEmployeeMutation, useGetEmployeesQuery, useLoginEmployeeMutation, useAddEmployeeMutation, useDeleteEmployeeMutation,  useGetEmployeebyIDQuery} = employeeApi;
