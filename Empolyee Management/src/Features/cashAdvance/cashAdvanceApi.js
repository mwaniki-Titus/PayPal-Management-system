import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const cashAdvanceApi = createApi({
  reducerPath: "cashAdvanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  tagTypes: ['cashAdvances'],
  endpoints: (builder) => ({
    // Queries
  // Retrieves all cash advances
    getCashAdvances: builder.query({
      query: () => 'cashadvances',
      providesTags: ['cashAdvances'],
     
    }),
      // Retrieves a specific cash advance by its ID
    getCashAdvanceById: builder.query({
      query: (id) => `cashadvances/${id}`,
      providesTags: (result, error, id) => [{ type: 'cashAdvances', id }],
      
    }),

    
    addCashAdvance: builder.mutation({
      query: (cashAdvance) => ({
        url: 'cashadvances',
        method: 'POST',
        body: cashAdvance
      }),
      invalidatesTags: ['cashAdvances'],
    
    }),

    updateCashAdvance: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `cashadvances/${id}`,
        method: 'PUT',
        body: updates
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'cashAdvances', id }],
    
    }),

    deleteCashAdvance: builder.mutation({
      query: (id) => ({
        url: `cashadvances/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cashAdvances'],
   
    })
  })
});


export const {
  useGetCashAdvancesQuery,
  useGetCashAdvanceByIdQuery,
  useAddCashAdvanceMutation,
  useUpdateCashAdvanceMutation,
  useDeleteCashAdvanceMutation
} = cashAdvanceApi;
