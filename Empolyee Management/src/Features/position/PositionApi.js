import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const positionApi = createApi({
    reducerPath: "positionApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/"}),
    tagTypes: ["Position"],
    endpoints: (builder) =>({
        getPosition: builder.query({
            query: () => "position", 
            providesTags: ["Position"]
        }),
        addPosition: builder.mutation({
            query: (position) =>({
                url: "/position/addPosition",
                method: "POST",
                body: position,
            }),
            invalidatesTags: ["Position"],
        }),
        editPosition: builder.mutation({
            query: ({ position_id, newPositionData }) =>({
                url: `/position/${position_id}`,
                method: "PATCH",
                body: newPositionData,
            }),
            invalidatesTags: ["Position"],
        }),
        getPositionById: builder.query({
            query: (position_id) => `position/${position_id}`,
            providesTags: (result, error, position_id) => [{ type: "Positions", id: position_id }],
        }),
        deletePosition: builder.mutation({
            query: (position_id) => ({
                url: `/positions/${position_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Position"],
        })
    })
});

export const {
    useGetPositionQuery,
    useAddPositionMutation,
    useEditPositionMutation,
    useGetPositionByIdQuery,
    useDeletePositionMutation
} = positionApi;
