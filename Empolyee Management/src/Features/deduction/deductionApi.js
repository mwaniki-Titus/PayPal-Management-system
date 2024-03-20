import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deductionApi = createApi({
    reducerPath: "deductionApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Deductions"],
    endpoints: (builder) =>({
        createNewDeduction: builder.mutation({
            query: (deduction) =>({
                url: "/deductions",
                method: "POST",
                body: deduction,
            }),
            invalidatesTags: ["Deduction"],
        }),
        getAllDeductions: builder.query({
            query: () => "deductions", 
            providesTags: ["Deduction"]
        })
    })
});

export const {
    useCreateNewDeductionMutation,
    useGetAllDeductionsQuery
} = deductionApi;


