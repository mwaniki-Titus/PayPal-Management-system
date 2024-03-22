import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scheduleApi = createApi({
  reducerPath: "scheduleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  tagTypes: ["Schedule"],
  endpoints: (builder) => ({
    getAllSchedule: builder.query({
      query: () => "schedule",
      providesTags: ["Schedule"],
    }),
    addSchedule: builder.mutation({
      query: (scheduleData) => ({
        url: "schedule/addSchedule",
        method: "POST",
        body: scheduleData,
      }),
      invalidatesTags: ["Schedule"],
    }),
    updateSchedule: builder.mutation({
      query: ({ scheduleID, updatedScheduleData }) => ({
        url: `schedule/${scheduleID}`,
        method: "PUT",
        body: updatedScheduleData,
      }),
      invalidatesTags: ["Schedule"],
    }),
    getScheduleById: builder.query({
      query: (scheduleID) => `schedule/${scheduleID}`, 
      providesTags: (result, error, scheduleID) => [
        { type: "Schedule", id: scheduleID },
      ],
    }),
    
    deleteSchedule: builder.mutation({
      query: (scheduleID) => ({
        url: `schedule/remove/${scheduleID}`,
        method: "DELETE",
       
      }),
      invalidatesTags: ["Schedule"],
    }),
    getEmployeesInSchedule: builder.query({
      query: (scheduleID) => `schedule/${scheduleID}/employees`,
      providesTags: (result, error, scheduleID) => [
        { type: "Employee", id: scheduleID },
      ],
    }),
  }),
});

export const {
  useGetAllScheduleQuery,
  useAddScheduleMutation,
  useUpdateScheduleMutation,
  useGetScheduleByIdQuery,
  useDeleteScheduleMutation,
  useGetEmployeesInScheduleQuery,
} = scheduleApi;
