import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  tagTypes: ['Employees'],
  endpoints: (builder) => ({
  
    // Retrieves all employees
    getEmployees: builder.query({
      query: () => 'employees',
      providesTags: ['employees'],
    }),

    // Retrieves a specific employee by ID
    getEmployeeById: builder.query({
      query: (id) => `employees/${id}`,
      providesTags: (result, error, id) => [{ type: 'employees', id }],
    }),

    // Mutations
    // Adds a new employee
    addEmployee: builder.mutation({
      query: (employee) => ({
        url: 'employees',
        method: 'POST',
        body: employee
      }),
      invalidatesTags: ['employees'],
    }),

    // Updates an existing employee
    updateEmployee: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `employees/${id}`,
        method: 'PUT',
        body: updates
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'employees', id }],
    }),

    // Deletes an employee by ID
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['employees'],
    })
  })
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation
} = employeeApi;
