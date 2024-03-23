import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cashAdvanceApi = createApi({
    reducerPath: "cashAdvanceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["CashAdvances"],
    endpoints: (builder) =>({
        createCashAdvances: builder.mutation({
            query: (cashAdvance) =>({
                url: "/create/cashAdvance",
                method: "POST",
                body: cashAdvance,
            }),
            invalidatesTags: ["CashAdvances"],
        }),
        getAllCashAdvances: builder.query({
            query: () => "/getAll/cashAdvance", 
            providesTags: ["CashAdvances"]
        })
    })
});

export const {
    useCreateCashAdvancesMutation,
    useGetAllCashAdvancesQuery
} = cashAdvanceApi;
