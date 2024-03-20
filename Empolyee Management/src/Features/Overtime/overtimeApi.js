import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const overtimeApi = createApi({
    reducerPath: "overtimeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Overtime"],
    endpoints: (builder) =>({
        createNewOvertime: builder.mutation({
            query: (overtime) =>({
                url: "/overtime",
                method: "POST",
                body: overtime,
            }),
            invalidatesTags: ["Overtime"],
        }),
        getAllOvertimeRecord: builder.query({
            query: () => "overtime/getall", 
            providesTags: ["Overtime"]
        })
    })
});

export const {
    useCreateNewOvertimeMutation,
    useGetAllOvertimeRecordQuery
} = overtimeApi;

