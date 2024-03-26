import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const payrollApi = createApi({
  reducerPath: "payrollApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  tagTypes: ["Payroll"],
  endpoints: (builder) => ({
    getAllPayrolls: builder.query({
      query: () => "payroll/getAll",
      providesTags: ["Payroll"],
    }),
    getPayrollById: builder.query({
      query: (payrollID) => `payroll/getpayrollByID/${payrollID}`,
      providesTags: (result, error, payrollID) => [{ type: "Payroll", id: payrollID }],
    }),
    getPayrollByEmpID: builder.query({
      query: (employeeID) => `payroll/getpayrollByEmpID/${employeeID}`,
      providesTags: (result, error, employeeID) => [{ type: "Payroll", id: employeeID }],
    }),
    addPayroll: builder.mutation({
      query: (payrollData) => ({
        url: "payroll/addpayroll",
        method: "POST",
        body: payrollData,
      }),
      invalidatesTags: ["Payroll"],
    }),
    updatePayroll: builder.mutation({
      query: ({ payrollID, updatedPayrollData }) => ({
        url: `payroll/UpdatepayrollByID/${payrollID}`,
        method: "PUT",
        body: updatedPayrollData,
      }),
      invalidatesTags: ["Payroll"],
    }),
    deletePayroll: builder.mutation({
      query: (payrollID) => ({
        url: `payroll/deletepayrollByID/${payrollID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payroll"],
    }),
  }),
});

// Extract generated hooks
export const {
  useGetAllPayrollsQuery,
  useGetPayrollByIdQuery,
  useGetPayrollByEmpIDQuery,
  useAddPayrollMutation,
  useUpdatePayrollMutation,
  useDeletePayrollMutation,
} = payrollApi;



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const payrollApi = createApi({
//     reducerPath: "payrollApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
//     tagTypes: ["Payrolls"],
//     endpoints: (builder) =>({
//         getPayrolls: builder.query({
//             query: () => ({
//                 url: "payroll/getAll",
//                 method: "GET",
//             }) ,  
//             providesTags: ["Payrolls"]
            
            
//         }),
//         getPayrollsByID: builder.query({
//             //by id???
//             query: (PayrollID) =>({
//                 url: `payroll/getpayrollByID/${PayrollID}`,
//                 method: "GET",
//             }),
//             providesTags: ["Payrolls"]
//         }),

//         getPayrollsByEmpID: builder.query({
//             //by id???
//             query: (EmployeeID) =>({
//                 url: `payroll/getpayrollByEmpID/${EmployeeID}`,
//                 method: "GET",
//             }),
//             providesTags: ["Payrolls"]
//         }),

//         // addSchedule: builder.mutation({
//         //     query: (schedule) =>({
//         //         url:"Payrolls/addSchedule",
//         //         method: "POST",
//         //         body: schedule,
//         //     }),
//         //     invalidatesTags: ["Payrolls"],
//         // }),

//         // updatePayrolls: builder.mutation({
//         //     query: (ScheduleID) =>({
//         //         url:`Payrolls/updateScheduleByID/${ScheduleID}`,
//         //         method: "PUT",
//         //     }),
//         //     invalidatesTags: ["Payrolls"],
//         // }),


//         // deletePayrolls: builder.mutation({
//         //     query:(ScheduleID) => ({
//         //         url:`Payrolls/deleteSchedule/${ScheduleID}`,
//         //         method: "DELETE",
//         //     }),
//         //     invalidatesTags: ["Payrolls"],
//         // })       


//     })
// });

// export const {useGetPayrollsQuery, useGetPayrollsByIDQuery} = payrollApi;