import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const overtimeApi = createApi({
    reducerPath: "overtimeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Overtime"],
    endpoints: (builder) =>({
        createNewOvertime: builder.mutation({
            query: (overtime) =>({
                url: "/overtime/add",
                method: "POST",
                body: overtime,
            }),
            invalidatesTags: ["Overtime"],
        }),
        getAllOvertimeRecord: builder.query({
            query: () => "overtime/getall", 
            providesTags: ["Overtime"]
        }),
        getOvertimeByID: builder.query({
            query: (overtimeID) => `overtime/byid/${overtimeID}`, 
            providesTags: (result, error, overtimeID) => [{ type: "Overtime", id: overtimeID }]
        })
    })
});

export const {
    useCreateNewOvertimeMutation,
    useGetAllOvertimeRecordQuery,
    usegetOvertimeByIDQuery
} = overtimeApi;

