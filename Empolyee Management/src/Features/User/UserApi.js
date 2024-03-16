import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
      
        
        loginEmployee: builder.mutation({
            query: (user) => ({
                url: 'auth/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        })
    })
});

export const {useLoginEmployeeMutation } = userApi;
